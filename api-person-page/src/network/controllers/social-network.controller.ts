import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SocialNetworkService } from '../services/social-network.service';
import {
  CreateSocialNetworkDto,
  UpdateSocialNetworkDto,
} from '../dtos/social-network.dto';

@ApiTags('social-network')
@Controller('social-network')
export class SocialNetworkController {
  constructor(private readonly _socialNetworkService: SocialNetworkService) {}

  @ApiOperation({ summary: 'Get all social networks' })
  @Get()
  getAll() {
    return this._socialNetworkService.findAllOrById();
  }

  @ApiOperation({ summary: 'Create social network' })
  @Post()
  createOne(@Body() payload: CreateSocialNetworkDto) {
    return this._socialNetworkService.saveOne(payload);
  }

  @ApiOperation({ summary: 'Update social network' })
  @Put(':id')
  updateOneById(
    @Body() payload: UpdateSocialNetworkDto,
    @Param('id') id: string,
  ) {
    return this._socialNetworkService.updateOneById(id, payload);
  }

  @ApiOperation({ summary: 'Get one social network by id' })
  @Get(':id')
  getById(@Param('id') id: string) {
    return this._socialNetworkService.findAllOrById(id);
  }
}
