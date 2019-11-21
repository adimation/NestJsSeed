import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RepositoryModule } from 'src/repository/repository.module';
import TaskService from './task.service';

@Module({
  imports: [RepositoryModule],
  providers: [AuthService, TaskService],
  exports: [AuthService, TaskService],
})
export class ServiceModule {}
