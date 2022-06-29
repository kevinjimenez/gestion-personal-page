import { Module } from '@nestjs/common';
import { ContestService } from './services/contest.service';
import { AcademicService } from './services/academic.service';
import { ThesisService } from './services/thesis.service';
import { CourseService } from './services/course.service';
import { AcademicController } from './controllers/academic.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Academic, AcademicSchema } from './schemas/academic.schema';
import { Contest, ContestSchema } from './schemas/contest.schema';
import { Course, CourseSchema } from './schemas/course.schema';
import { Thesis, ThesisSchema } from './schemas/thesis.schema';
import { ContestController } from './controllers/contest.controller';
import { CourseController } from './controllers/course.controller';
import { ThesisController } from './controllers/thesis.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Academic.name, schema: AcademicSchema },
      { name: Contest.name, schema: ContestSchema },
      { name: Course.name, schema: CourseSchema },
      { name: Thesis.name, schema: ThesisSchema },
    ]),
  ],
  providers: [ContestService, AcademicService, ThesisService, CourseService],
  controllers: [AcademicController, ContestController, CourseController, ThesisController],
})
export class AcademicModule {
}
