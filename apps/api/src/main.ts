import { configureNestJsMicroservice } from '@app/shared/projectConfig/config';
import type { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ApiModule } from './api.module';

async function bootstrap() {
  const app: INestApplication<any> = await NestFactory.create(ApiModule);
  configureNestJsMicroservice(app);
  app.enableCors();
  await app.listen(5000);
}
bootstrap();
