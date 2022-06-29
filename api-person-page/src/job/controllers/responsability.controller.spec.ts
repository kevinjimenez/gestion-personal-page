import { Test, TestingModule } from '@nestjs/testing';
import { ResponsabilityController } from './responsability.controller';

describe('ResponsabilityController', () => {
  let controller: ResponsabilityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResponsabilityController],
    }).compile();

    controller = module.get<ResponsabilityController>(ResponsabilityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
