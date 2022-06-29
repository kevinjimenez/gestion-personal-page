import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ContestService } from '../services/contest.service';
import { CreateContestDto, UpdateContestDto } from '../dtos/contest.dto';

@ApiTags('contest')
@Controller('contest')
export class ContestController {
  constructor(private readonly _contestService: ContestService) {}

  @ApiOperation({ summary: 'Get all jobs' })
  @Get()
  getAll() {
    return this._contestService.findAllOrById();
  }

  @ApiOperation({ summary: 'Create job' })
  @Post()
  createOne(@Body() payload: CreateContestDto) {
    return this._contestService.saveOne(payload);
  }

  @ApiOperation({ summary: 'Update job' })
  @Put(':id')
  updateOneById(@Body() payload: UpdateContestDto, @Param('id') id: string) {
    return this._contestService.updateOneById(id, payload);
  }

  @ApiOperation({ summary: 'Get one job by id' })
  @Get(':id')
  getById(@Param('id') id: string) {
    return this._contestService.findAllOrById(id);
  }
}
