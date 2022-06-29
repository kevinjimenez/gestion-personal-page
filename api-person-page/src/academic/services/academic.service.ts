import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Academic } from '../schemas/academic.schema';
import { PrincipalService } from '../../common/principal.service';
import { CreateAcademicDto, UpdateAcademicDto } from '../dtos/academic.dto';

@Injectable()
export class AcademicService extends PrincipalService<
  Academic,
  CreateAcademicDto,
  UpdateAcademicDto
> {
  constructor(
    @InjectModel(Academic.name)
    private readonly _academicModel: Model<Academic>,
  ) {
    super(_academicModel, new Logger(AcademicService.name));
  }
}
