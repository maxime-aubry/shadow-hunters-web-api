import { Module } from '@nestjs/common';
import { LoggerModule } from '../../services/logger/logger.module';
import { MicroserviceConfigService } from './microservice-config.service';

@Module({
  imports: [LoggerModule],
  providers: [MicroserviceConfigService],
  exports: [MicroserviceConfigService],
})
export class MicroserviceConfigModule {}
