import { Module } from '@nestjs/common';
import { ApiService } from './api.service';

@Module({
  imports: [ApiService],
  providers: [ApiService],
  exports: [ApiService],
})
export class ApiServiceModule {}
