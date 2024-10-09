// import { beforeEach, describe, expect, it } from 'bun:test';
// import { Test, type TestingModule } from '@nestjs/testing';
// import type { IConfiguration } from './configuration.interface';
// import type { IEnvironmentConfiguration } from './environment-config.interface';
// import { EnvironmentConfigModule } from './environment-config.module';
// import { EnvironmentConfigService } from './environment-config.service';
// import type { IMessageQueueConfiguration } from './message-queue-config.interface';

// describe('Tests for EnvironmentConfigService', () => {
//   let configuration: IConfiguration;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       imports: [EnvironmentConfigModule],
//       providers: [EnvironmentConfigService],
//     }).compile();

//     configuration = module.get(EnvironmentConfigService);
//   });

//   it('EnvironmentConfigService should provide paramters from .env.test file', () => {
//     const environmentConfigration: IEnvironmentConfiguration = configuration;
//     expect(environmentConfigration).toBeDefined();
//     expect(environmentConfigration.getEnvironment()).toEqual('test');

//     const messageQueueConfiguration: IMessageQueueConfiguration = configuration;
//     expect(messageQueueConfiguration).toBeDefined();
//     expect(messageQueueConfiguration.getMessageQueueUser()).toEqual('user');
//     expect(messageQueueConfiguration.getMessageQueuePass()).toEqual('password');
//     expect(messageQueueConfiguration.getMessageQueueHost()).toEqual('127.0.0.1:5672');
//     expect(messageQueueConfiguration.getMessageQueueAuthQueue()).toEqual('auth_queue');
//     expect(messageQueueConfiguration.getMessageQueueUrl()).toEqual('amqp://user:password@127.0.0.1:5672');
//   });
// });
