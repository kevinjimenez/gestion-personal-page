import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GitRepository } from '../schemas/git-repository.schema';
import { PrincipalService } from '../../common/principal.service';
import {
  CreateGitRepositoryDto,
  UpdateGitRepositoryDto,
} from '../dtos/git-repository.dto';

@Injectable()
export class GitRepositoryService extends PrincipalService<
  GitRepository,
  CreateGitRepositoryDto,
  UpdateGitRepositoryDto
> {
  constructor(
    @InjectModel(GitRepository.name)
    private readonly _gitRepository: Model<GitRepository>,
  ) {
    super(_gitRepository, new Logger(GitRepositoryService.name));
  }
}
