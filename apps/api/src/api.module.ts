import { MessageQueueModule, MicroserviceConfigModule } from '@app/shared';
import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';

@Module({
  imports: [MessageQueueModule.registerRmq('AUTH_SERVICE', process.env.RABBITMQ_AUTH_QUEUE), MicroserviceConfigModule],
  controllers: [ApiController],
})
export class ApiModule {}
