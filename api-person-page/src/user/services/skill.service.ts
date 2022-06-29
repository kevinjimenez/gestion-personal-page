import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Skill } from '../schemas/skill.schema';
import { PrincipalService } from '../../common/principal.service';
import { CreateSkillDto, UpdateSkillDto } from '../dtos/skill.dto';

@Injectable()
export class SkillService extends PrincipalService<
  Skill,
  CreateSkillDto,
  UpdateSkillDto
> {
  constructor(
    @InjectModel(Skill.name)
    private readonly _skillModel: Model<Skill>,
  ) {
    super(_skillModel, new Logger(SkillService.name));
  }
}
