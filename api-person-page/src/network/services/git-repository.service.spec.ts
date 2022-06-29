import { Test, TestingModule } from '@nestjs/testing';
import { GitRepositoryService } from './git-repository.service';

describe('GitRepositoryService', () => {
  let service: GitRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GitRepositoryService],
    }).compile();

    service = module.get<GitRepositoryService>(GitRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
