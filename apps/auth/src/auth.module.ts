import { EnvironmentConfigModule } from '@app/shared';
import { MicroserviceInitializerModule } from '@app/shared/config/microservice-initializer/microservice-initializer.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [EnvironmentConfigModule, MicroserviceInitializerModule],
})
export class AuthModule {}
