import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Job } from '../schemas/job.schema';
import { PrincipalService } from '../../common/principal.service';
import { CreateJobDto, UpdateJobDto } from '../dtos/job.dto';

@Injectable()
export class JobService extends PrincipalService<
  Job,
  CreateJobDto,
  UpdateJobDto
> {
  constructor(
    @InjectModel(Job.name)
    private readonly _jobModel: Model<Job>,
  ) {
    super(_jobModel, new Logger(JobService.name));
  }
}
