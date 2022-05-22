import { Test, TestingModule } from '@nestjs/testing';
import { TenantsController } from './tenants.controller';
import { TenantsService } from './tenants.service';

describe('TenantsController', () => {
  let tenantsController: TenantsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TenantsController],
      providers: [TenantsService],
    }).compile();

    tenantsController = app.get<TenantsController>(TenantsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(tenantsController.getHello()).toBe('Hello World!');
    });
  });
});
