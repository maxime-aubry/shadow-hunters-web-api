import type { INestApplication } from '@nestjs/common';

export interface IMicroserviceInitializerService {
  initialize(app: INestApplication<any>, queue: string): void;
}
