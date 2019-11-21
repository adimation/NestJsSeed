import { Module } from '@nestjs/common';
import { InfastructureModule } from './infastructure/infastructure.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { ControllerModule } from './controller/controller.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    InfastructureModule,
    ControllerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
