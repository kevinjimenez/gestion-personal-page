import { Test, TestingModule } from '@nestjs/testing';
import { ResponsabilityService } from './responsability.service';

describe('ResponsabilityService', () => {
  let service: ResponsabilityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResponsabilityService],
    }).compile();

    service = module.get<ResponsabilityService>(ResponsabilityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
