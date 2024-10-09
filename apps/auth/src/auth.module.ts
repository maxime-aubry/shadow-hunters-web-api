import { EnvironmentConfigModule, MessageQueueModule, MicroserviceConfigModule } from '@app/shared';
import { Module } from '@nestjs/common';

@Module({
  imports: [EnvironmentConfigModule, MessageQueueModule, MicroserviceConfigModule],
})
export class AuthModule {}
