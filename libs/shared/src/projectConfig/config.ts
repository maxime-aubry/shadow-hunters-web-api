import { type INestApplication, ValidationPipe } from '@nestjs/common';
import type { RmqOptions } from '@nestjs/microservices';
import cookieParser from 'cookie-parser';
import type { IMessageQueueService } from '../interfaces/services/messageQueue/messageQueue.service.interface';
import { LoggerService } from '../services/logger/logger.service';
import { MessageQueueService } from '../services/messageQueue/messageQueue.service';
import { AllExceptionFilter } from './filter/exception.filter';
import { LoggingInterceptor } from './interceptors/logger.interceptor';
import { ResponseInterceptor } from './interceptors/response.interceptor';

export const configureNestJsMicroservice = (app: INestApplication<any>): void => {
  app.useGlobalFilters(new AllExceptionFilter(new LoggerService()));
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new LoggingInterceptor(new LoggerService()));
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.use(cookieParser());
};

export const configureMessageQueueListener = (app: INestApplication<any>, queue: string): void => {
  const messageQueueService: IMessageQueueService = app.get(MessageQueueService);
  const options: RmqOptions = messageQueueService.getMessageQueueOptions(queue);
  app.connectMicroservice(options);
};
