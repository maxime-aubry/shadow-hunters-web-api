import { Controller, Get, Inject } from '@nestjs/common';
import type { ClientProxy } from '@nestjs/microservices';
import type { Observable } from 'rxjs';

@Controller()
export class ApiController {
  constructor(@Inject('AUTH_SERVICE') private readonly authService: ClientProxy) {}

  @Get('getUser')
  async getUser(): Promise<Observable<any>> {
    return await this.authService.send(
      {
        cmd: 'get-user',
      },
      {},
    );
  }
}
