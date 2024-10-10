import { Module } from '@nestjs/common';
import { MicroserviceInitializerService } from './microservice-initializer.service';

@Module({
  providers: [MicroserviceInitializerService],
  exports: [MicroserviceInitializerService],
})
export class MicroserviceInitializerModule {}
