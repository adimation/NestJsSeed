import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { RoleRepository } from './role.repository';
import { PermissionRepository } from './permission.resporitory';
import TaskRepository from './task.repository';
import User from 'src/entity/user.entity';
import Task from 'src/entity/task.entity';
import { ClassProvider } from '@nestjs/common/interfaces';
import Permission from 'src/entity/permission.entity';
import Role from 'src/entity/role.entity';
import { typeOrmConfig } from 'src/config/typeorm.config';

// const taskRepositoryProvider: ClassProvider = {
//   provide: 'TASK_REPOSITORY',
//   useClass: TaskRepository,
// };

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Role, Permission, Task]),
  ],
  providers: [UserRepository, RoleRepository, PermissionRepository, TaskRepository],
  exports: [UserRepository, RoleRepository, PermissionRepository, TaskRepository],
})
export class RepositoryModule {}
