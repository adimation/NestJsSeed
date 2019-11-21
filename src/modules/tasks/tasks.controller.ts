import { Controller, Get, Post, Body, Put } from '@nestjs/common';
import { BaseController } from 'src/infastructure/base/base.controller';
import { TasksService } from './tasks.service';
import bodyParser = require('body-parser');

@Controller('tasks')
export class TasksController extends BaseController {
    constructor(private tasksService: TasksService) {
        super();
    }
}
