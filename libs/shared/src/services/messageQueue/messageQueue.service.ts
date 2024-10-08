import { EnvironmentConfigService } from '@app/shared/config/environment-config/environment-config.service';
import type { IMessageQueueConfiguration } from '@app/shared/config/environment-config/message-queue-config.interface';
import type { IMessageQueueService } from '@app/shared/interfaces/services/messageQueue/messageQueue.service.interface';
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
        socketOptions: {
          heartbeat: 10 // Envoyer un "heartbeat" toutes les 10 secondes
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
