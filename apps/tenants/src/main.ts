import { NestFactory } from '@nestjs/core';
import { TenantsModule } from './tenants.module';

async function bootstrap() {
  const app = await NestFactory.create(TenantsModule);
  await app.listen(3000);
}
bootstrap();
