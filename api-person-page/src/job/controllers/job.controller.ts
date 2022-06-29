import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JobService } from '../services/job.service';
import { CreateJobDto, UpdateJobDto } from '../dtos/job.dto';

@ApiTags('job')
@Controller('job')
export class JobController {
  constructor(private readonly _jobService: JobService) {}

  @ApiOperation({ summary: 'Get all jobs' })
  @Get()
  getAll() {
    return this._jobService.findAllOrById();
  }

  @ApiOperation({ summary: 'Create job' })
  @Post()
  createOne(@Body() payload: CreateJobDto) {
    return this._jobService.saveOne(payload);
  }

  @ApiOperation({ summary: 'Update job' })
  @Put(':id')
  updateOneById(@Body() payload: UpdateJobDto, @Param('id') id: string) {
    return this._jobService.updateOneById(id, payload);
  }

  @ApiOperation({ summary: 'Get one job by id' })
  @Get(':id')
  getById(@Param('id') id: string) {
    return this._jobService.findAllOrById(id);
  }
}
