import { Test, TestingModule } from '@nestjs/testing';
import { GitRepositoryController } from './git-repository.controller';

describe('GitRepositoryController', () => {
  let controller: GitRepositoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GitRepositoryController],
    }).compile();

    controller = module.get<GitRepositoryController>(GitRepositoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
