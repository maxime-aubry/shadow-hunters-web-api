import { EnvironmentConfigModule } from '@app/shared/config/environment-config/environment-config.module';
import { Module } from '@nestjs/common';
import { MessageQueueService } from './message-queue.service';

@Module({
  imports: [EnvironmentConfigModule],
  providers: [MessageQueueService],
  exports: [MessageQueueService],
})
export class MessageQueueModule {}
