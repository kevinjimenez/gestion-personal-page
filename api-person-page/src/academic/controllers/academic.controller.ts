import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AcademicService } from '../services/academic.service';
import { CreateAcademicDto, UpdateAcademicDto } from '../dtos/academic.dto';

@ApiTags('academic')
@Controller('academic')
export class AcademicController {
  constructor(private readonly _academicService: AcademicService) {}

  @ApiOperation({ summary: 'Get all jobs' })
  @Get()
  getAll() {
    return this._academicService.findAllOrById();
  }

  @ApiOperation({ summary: 'Create job' })
  @Post()
  createOne(@Body() payload: CreateAcademicDto) {
    return this._academicService.saveOne(payload);
  }

  @ApiOperation({ summary: 'Update job' })
  @Put(':id')
  updateOneById(@Body() payload: UpdateAcademicDto, @Param('id') id: string) {
    return this._academicService.updateOneById(id, payload);
  }

  @ApiOperation({ summary: 'Get one job by id' })
  @Get(':id')
  getById(@Param('id') id: string) {
    return this._academicService.findAllOrById(id);
  }
}
