import { Controller, Post, Body, Get, Param, ParseIntPipe, Query } from "@nestjs/common";
import TaskService from "src/service/task.service";

@Controller('task')
export class TaskController {
    constructor(private taskService: TaskService) { }

    @Get('/')
    async get(): Promise<any> {
        return this.taskService.get();
    }

    @Get('/paged')
    async getPaged(@Query('pageIndex', ParseIntPipe) pageIndex: number = 1, @Query('pageSize', ParseIntPipe) pageSize: number = 10): Promise<any> {
        console.log(pageIndex, pageSize);
        return this.taskService.getPaged(pageIndex, pageSize);
    }

}
