import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Responsability } from '../schemas/responsability.schema';
import { PrincipalService } from '../../common/principal.service';
import {
  CreateResponsabilityDto,
  UpdateResponsabilityDto,
} from '../dtos/responsability.dto';

@Injectable()
export class ResponsabilityService extends PrincipalService<
  Responsability,
  CreateResponsabilityDto,
  UpdateResponsabilityDto
> {
  constructor(
    @InjectModel(Responsability.name)
    private readonly _responsabilityModel: Model<Responsability>,
  ) {
    super(_responsabilityModel, new Logger(ResponsabilityService.name));
  }
}
