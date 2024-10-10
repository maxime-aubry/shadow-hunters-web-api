import type { IMicroserviceInitializerService } from '@app/shared/interfaces/config/microservice-initializer/microservice-initializer.service.interface';
import type { IMessageQueueService } from '@app/shared/interfaces/services/messageQueue/message-queue.service.interface';
import { MessageQueueService } from '@app/shared/services/message-queue/message-queue.service';
import { type INestApplication, Injectable } from '@nestjs/common';
import type { RmqOptions } from '@nestjs/microservices';

@Injectable()
export class MicroserviceInitializerService implements IMicroserviceInitializerService {
  public initialize(app: INestApplication<any>, queue: string): void {
    this.addMessageQueueListener(app, queue);
  }

  private addMessageQueueListener(app: INestApplication<any>, queue: string): void {
    const messageQueueService: IMessageQueueService = app.get(MessageQueueService);
    const options: RmqOptions = messageQueueService.getMessageQueueOptions(queue);
    app.connectMicroservice(options);
  }
}
