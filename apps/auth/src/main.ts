import { EnvironmentConfigService } from '@app/shared/config/environment-config/environment-config.service';
import { MicroserviceConfigService } from '@app/shared/config/microservice-config/microservice-config.service';
import type { IMessageQueueConfiguration } from '@app/shared/interfaces/config/environment-configuration/message-queue-config.service.interface';
import type { IMicroserviceConfigService } from '@app/shared/interfaces/config/microservice-config/microservice-config.service.interface';
import type { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';

async function bootstrap() {
  const app: INestApplication<any> = await NestFactory.create(AuthModule);

  const messageQueueConfig: IMessageQueueConfiguration = app.get(EnvironmentConfigService);
  const projectConfiguratorService: IMicroserviceConfigService = app.get(MicroserviceConfigService);
  const queue: string = messageQueueConfig.getMessageQueueAuthQueue();
  projectConfiguratorService.addMessageQueueListener(app, queue);

  app.startAllMicroservices();
}

bootstrap();
