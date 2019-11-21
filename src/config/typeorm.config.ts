import { TypeOrmModuleOptions } from "@nestjs/typeorm";
// import Task from "src/entity/task.entity";
// import User from "src/entity/user.entity";
// import Role from "src/entity/role.entity";
// import Permission from "src/entity/permission.entity";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'onlinetest',
    entities: [__dirname + '/../**/*.entity.js'],
    // entities: [Task, User, Role, Permission],
    synchronize: true,
}