import { MicroserviceConfigService } from '@app/shared/config/microservice-config/microservice-config.service';
import type { IMicroserviceConfigService } from '@app/shared/interfaces/config/microservice-config/microservice-config.service.interface';
import type { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ApiModule } from './api.module';

async function bootstrap() {
  const app: INestApplication<any> = await NestFactory.create(ApiModule);
  const microserviceConfiguratorService: IMicroserviceConfigService = app.get(MicroserviceConfigService);
  microserviceConfiguratorService.addFilters(app);
  microserviceConfiguratorService.addPipes(app);
  microserviceConfiguratorService.addInterceptors(app);
  app.enableCors();
  await app.listen(5000);
}

bootstrap();
