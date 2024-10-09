import type { IMessageQueueService } from '@app/shared/interfaces/services/messageQueue/messageQueue.service.interface';
import { MessageQueueService } from '@app/shared/services/messageQueue/messageQueue.service';
import { Controller, Inject } from '@nestjs/common';
import { Ctx, MessagePattern, type RmqContext } from '@nestjs/microservices';

@Controller()
export class AuthController {
  constructor(@Inject(MessageQueueService) private readonly messageQueueService: IMessageQueueService) {}

  @MessagePattern({ cmd: 'get-user' })
  public getUser(@Ctx() context: RmqContext): string {
    console.log('auth:getUser');
    this.messageQueueService.acknowledgeMessage(context);
    return 'test';
  }
}
