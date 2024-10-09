import type { IMicroserviceConfigService } from '@app/shared/interfaces/config/microservice-config/microservice-config.service.interface';
import { type INestApplication, Inject, Injectable, ValidationPipe } from '@nestjs/common';
import type { RmqOptions } from '@nestjs/microservices';
import { AllExceptionFilter } from '../../filters/exception.filter';
import { LoggingInterceptor } from '../../interceptors/logger.interceptor';
import { ResponseInterceptor } from '../../interceptors/response.interceptor';
import type { ILoggerService } from '../../interfaces/services/logger/logger.interface';
import type { IMessageQueueService } from '../../interfaces/services/messageQueue/message-queue.service.interface';
import { LoggerService } from '../../services/logger/logger.service';
import { MessageQueueService } from '../../services/message-queue/message-queue.service';

@Injectable()
export class MicroserviceConfigService implements IMicroserviceConfigService {
  constructor(@Inject(LoggerService) private readonly loggerService: ILoggerService) {}

  public addFilters(app: INestApplication<any>): void {
    app.useGlobalFilters(new AllExceptionFilter(this.loggerService));
  }

  public addPipes(app: INestApplication<any>): void {
    app.useGlobalPipes(new ValidationPipe());
  }

  public addInterceptors(app: INestApplication<any>): void {
    app.useGlobalInterceptors(new LoggingInterceptor(this.loggerService));
    app.useGlobalInterceptors(new ResponseInterceptor());
  }

  public addMessageQueueListener(app: INestApplication<any>, queue: string): void {
    const messageQueueService: IMessageQueueService = app.get(MessageQueueService);
    const options: RmqOptions = messageQueueService.getMessageQueueOptions(queue);
    app.connectMicroservice(options);
  }
}
