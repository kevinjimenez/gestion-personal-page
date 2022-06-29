import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from '../schemas/user.schema';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @ApiOperation({ summary: 'List of users' })
  @Get()
  getAll() {
    return this._userService.findAllOrById();
  }

  @ApiOperation({ summary: 'Create user' })
  @Post()
  createOne(@Body() payload: CreateUserDto) {
    return this._userService.saveOne(payload);
  }

  @ApiOperation({ summary: 'Update user' })
  @Put(':id')
  updateOne(@Param('id') id: string, @Body() payload: UpdateUserDto) {
    return this._userService.updateOneById(id, payload);
  }

  @ApiOperation({ summary: 'Find user by id' })
  @Get(':id')
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Should be an id of a user that exists in the database',
    type: String,
  })
  @ApiResponse({
    status: 200,
    description: 'A user has been successfully fetched',
    type: User,
  })
  @ApiResponse({
    status: 404,
    description: 'A user with given id does not exist.',
  })
  getById(@Param('id') id: string) {
    return this._userService.findAllOrById(id);
  }
}
