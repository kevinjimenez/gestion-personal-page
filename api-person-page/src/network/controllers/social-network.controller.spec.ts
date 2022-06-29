import { Test, TestingModule } from '@nestjs/testing';
import { SocialNetworkController } from './social-network.controller';

describe('SocialNetworkController', () => {
  let controller: SocialNetworkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SocialNetworkController],
    }).compile();

    controller = module.get<SocialNetworkController>(SocialNetworkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
