import { EnvironmentConfigModule, MessageQueueModule } from '@app/shared';
import { Module } from '@nestjs/common';

@Module({
  imports: [EnvironmentConfigModule, MessageQueueModule],
})
export class AuthModule {}
