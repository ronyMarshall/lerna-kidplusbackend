import { Controller, Get } from '@nestjs/common';
import { TenantsService } from './tenants.service';

@Controller()
export class TenantsController {
  constructor(private readonly tenantsService: TenantsService) {}

  @Get()
  getHello(): string {
    return this.tenantsService.getHello();
  }

  @Get('test')
  test() {
    return this.tenantsService.test();
  }
}
