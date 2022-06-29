import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Course } from '../schemas/course.schema';
import { Model } from 'mongoose';
import { PrincipalService } from '../../common/principal.service';
import { CreateCourseDto, UpdateCourseDto } from '../dtos/cource.dto';

@Injectable()
export class CourseService extends PrincipalService<
  Course,
  CreateCourseDto,
  UpdateCourseDto
> {
  constructor(
    @InjectModel(Course.name)
    private readonly _courseModel: Model<Course>,
  ) {
    super(_courseModel, new Logger(CourseService.name));
  }
}
