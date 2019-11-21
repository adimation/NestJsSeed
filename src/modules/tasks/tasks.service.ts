import { Injectable, Get } from '@nestjs/common';
import { ApplicationService } from 'src/infastructure/base/application.service';

@Injectable()
export class TasksService {
    private tasks = [];

    public getAllTasks() {
        return this.tasks;
    }
}
