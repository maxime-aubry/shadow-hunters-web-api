import { EnvironmentConfigModule, MessageQueueModule, MicroserviceInitializerModule } from '@app/shared';
import { Module } from '@nestjs/common';

@Module({
  imports: [EnvironmentConfigModule, MicroserviceInitializerModule, MessageQueueModule],
})
export class AuthModule {}
