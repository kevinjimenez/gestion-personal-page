import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Thesis } from '../schemas/thesis.schema';
import { PrincipalService } from '../../common/principal.service';
import { CreateThesisDto, UpdateThesisDto } from '../dtos/thesis.dto';

@Injectable()
export class ThesisService extends PrincipalService<
  Thesis,
  CreateThesisDto,
  UpdateThesisDto
> {
  constructor(
    @InjectModel(Thesis.name)
    private readonly _thesisModel: Model<Thesis>,
  ) {
    super(_thesisModel, new Logger(ThesisService.name));
  }
}
