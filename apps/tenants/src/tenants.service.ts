import { Injectable } from '@nestjs/common';

@Injectable()
export class TenantsService {
  getHello(): string {
    return 'Hello World!';
  }

  test() {
    return 'test';
  }
}
