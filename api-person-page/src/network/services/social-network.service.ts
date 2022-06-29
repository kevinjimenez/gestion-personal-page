import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SocialNetwork } from '../schemas/social-network.schema';
import { PrincipalService } from '../../common/principal.service';
import {
  CreateSocialNetworkDto,
  UpdateSocialNetworkDto,
} from '../dtos/social-network.dto';

@Injectable()
export class SocialNetworkService extends PrincipalService<
  SocialNetwork,
  CreateSocialNetworkDto,
  UpdateSocialNetworkDto
> {
  constructor(
    @InjectModel(SocialNetwork.name)
    private readonly _socialNetworkModel: Model<SocialNetwork>,
  ) {
    super(_socialNetworkModel, new Logger(SocialNetworkService.name));
  }
}
