import { EnvironmentConfigModule } from '@app/shared/config/environment-config/environment-config.module';
import { EnvironmentConfigService } from '@app/shared/config/environment-config/environment-config.service';
import type { IMessageQueueConfiguration } from '@app/shared/config/environment-config/message-queue-config.interface';
import { type DynamicModule, Module, type Provider } from '@nestjs/common';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { MessageQueueService } from './messageQueue.service';

@Module({
  imports: [EnvironmentConfigModule],
  providers: [MessageQueueService],
  exports: [MessageQueueService],
})
export class MessageQueueModule {
  static registerRmq(service: string, queue: string): DynamicModule {
    const providers: Provider[] = [
      {
        provide: service,
        useFactory: (config: IMessageQueueConfiguration) => {
          return ClientProxyFactory.create({
            transport: Transport.RMQ,
            options: {
              urls: [config.getMessageQueueUrl()],
              queue,
              queueOptions: {
                durable: true, // queue survives broker restart
              },
              socketOptions: {
                heartbeat: 10 // Envoyer un "heartbeat" toutes les 10 secondes
              },
            },
          });
        },
        inject: [EnvironmentConfigService],
      },
    ];

    return {
      module: MessageQueueModule,
      providers,
      exports: providers,
    };
  }
}
