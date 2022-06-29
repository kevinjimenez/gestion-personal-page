import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Proyect } from '../schemas/proyect.schema';
import { PrincipalService } from '../../common/principal.service';
import { CreateProyectDto, UpdateProyectDto } from '../dtos/proyect.dto';

@Injectable()
export class ProyectService extends PrincipalService<Proyect, CreateProyectDto, UpdateProyectDto>{
  constructor(
    @InjectModel(Proyect.name)
    private readonly _proyectModel: Model<Proyect>,
  ) {
    super(_proyectModel, new Logger(ProyectService.name));
  }
}
