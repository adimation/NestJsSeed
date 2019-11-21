import { Module } from '@nestjs/common';
import { ApplicationService } from './base/application.service';
import { BaseService } from './base/base.service';

@Module({
  providers: [ApplicationService, BaseService],
})
export class InfastructureModule {}
