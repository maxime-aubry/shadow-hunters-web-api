import type { INestApplication } from '@nestjs/common';

export interface IMicroserviceConfigService {
  addFilters(app: INestApplication<any>): void;
  addPipes(app: INestApplication<any>): void;
  addInterceptors(app: INestApplication<any>): void;
  addMessageQueueListener(app: INestApplication<any>, queue: string): void;
}
