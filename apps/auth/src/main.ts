import { EnvironmentConfigService } from '@app/shared/config/environment-config/environment-config.service';
import type { IMessageQueueConfiguration } from '@app/shared/config/environment-config/message-queue-config.interface';
import { configureMessageQueueListener } from '@app/shared/projectConfig/config';
import type { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';

async function bootstrap() {
  const app: INestApplication<any> = await NestFactory.create(AuthModule);
  addApiListener(app);
  app.startAllMicroservices();
}

const addApiListener = (app: INestApplication<any>): void => {
  const messageQueueConfig: IMessageQueueConfiguration = app.get(EnvironmentConfigService);
  const queue: string = messageQueueConfig.getMessageQueueAuthQueue();
  configureMessageQueueListener(app, queue);
};

bootstrap();
