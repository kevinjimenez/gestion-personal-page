import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CourseService } from '../services/course.service';
import { CreateCourseDto, UpdateCourseDto } from '../dtos/cource.dto';

@ApiTags('course')
@Controller('course')
export class CourseController {
  constructor(private readonly _courseService: CourseService) {}

  @ApiOperation({ summary: 'Get all jobs' })
  @Get()
  getAll() {
    return this._courseService.findAllOrById();
  }

  @ApiOperation({ summary: 'Create job' })
  @Post()
  createOne(@Body() payload: CreateCourseDto) {
    return this._courseService.saveOne(payload);
  }

  @ApiOperation({ summary: 'Update job' })
  @Put(':id')
  updateOneById(@Body() payload: UpdateCourseDto, @Param('id') id: string) {
    return this._courseService.updateOneById(id, payload);
  }

  @ApiOperation({ summary: 'Get one job by id' })
  @Get(':id')
  getById(@Param('id') id: string) {
    return this._courseService.findAllOrById(id);
  }
}
