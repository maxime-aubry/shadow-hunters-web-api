import { EnvironmentConfigModule } from '@app/shared/config/environment-config/environment-config.module';
import { EnvironmentConfigService } from '@app/shared/config/environment-config/environment-config.service';
import type { IMessageQueueConfiguration } from '@app/shared/interfaces/config/environment-configuration/message-queue-config.service.interface';
import { type DynamicModule, Module, type Provider } from '@nestjs/common';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { MessageQueueService } from './message-queue.service';

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
