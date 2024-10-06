import type { IEnvironmentConfiguration } from './environment-config.interface';
import type { IMessageQueueConfiguration } from './message-queue-config.interface';

export interface IConfiguration extends IEnvironmentConfiguration, IMessageQueueConfiguration {}
