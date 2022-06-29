import { Module } from '@nestjs/common';
import { SocialNetworkService } from './services/social-network.service';
import { GitRepositoryService } from './services/git-repository.service';
import { SocialNetworkController } from './controllers/social-network.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { GitRepository, GitRepositorySchema } from './schemas/git-repository.schema';
import { SocialNetwork, SocialNetworkSchema } from './schemas/social-network.schema';
import { GitRepositoryController } from './controllers/git-repository.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: GitRepository.name, schema: GitRepositorySchema },
      { name: SocialNetwork.name, schema: SocialNetworkSchema },
    ]),
  ],
  providers: [SocialNetworkService, GitRepositoryService],
  controllers: [SocialNetworkController, GitRepositoryController],
})
export class NetworkModule {}
