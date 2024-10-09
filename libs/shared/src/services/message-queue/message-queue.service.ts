import { EnvironmentConfigService } from '@app/shared/config/environment-config/environment-config.service';
import type { IMessageQueueConfiguration } from '@app/shared/interfaces/config/environment-configuration/message-queue-config.service.interface';
import type { IMessageQueueService } from '@app/shared/interfaces/services/messageQueue/message-queue.service.interface';
import { Inject, Injectable } from '@nestjs/common';
import { type RmqContext, type RmqOptions, Transport } from '@nestjs/microservices';

@Injectable()
export class MessageQueueService implements IMessageQueueService {
  constructor(@Inject(EnvironmentConfigService) private config: IMessageQueueConfiguration) {}

  public getMessageQueueOptions(queue: string): RmqOptions {
    return {
      transport: Transport.RMQ,
      options: {
        urls: [this.config.getMessageQueueUrl()],
        noAck: false,
        queue,
        queueOptions: {
          durable: true, // queue survives broker restart
        },
      },
    };
  }

  public acknowledgeMessage(context: RmqContext): void {
    const channel = context.getChannelRef();
    const message = context.getMessage();
    channel.ack(message);
  }
}
