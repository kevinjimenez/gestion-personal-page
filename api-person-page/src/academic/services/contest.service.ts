import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contest } from '../schemas/contest.schema';
import { PrincipalService } from '../../common/principal.service';
import { CreateContestDto, UpdateContestDto } from '../dtos/contest.dto';
import { AcademicService } from './academic.service';

@Injectable()
export class ContestService extends PrincipalService<
  Contest,
  CreateContestDto,
  UpdateContestDto
> {
  constructor(
    @InjectModel(Contest.name)
    private readonly _contestModel: Model<Contest>,
  ) {
    super(_contestModel, new Logger(AcademicService.name));
  }
}
