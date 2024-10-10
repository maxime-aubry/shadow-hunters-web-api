import type { INestApplication } from '@nestjs/common';

export interface IApiGatewayInitializerService {
  initialize(app: INestApplication<any>, port: number): Promise<void>;
}
