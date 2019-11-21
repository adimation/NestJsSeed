import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { ServiceModule } from 'src/service/service.module';
import { TaskController } from './task.controller';

@Module({
  imports: [ServiceModule],
  controllers: [AuthController, TaskController],
  providers: [],
})
export class ControllerModule {}
