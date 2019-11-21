import { Injectable, Inject } from "@nestjs/common";
import TaskRepository from 'src/repository/task.repository';
import { Repository, getCustomRepository, EntityManager } from 'typeorm';
import Task from "src/entity/task.entity";
import { PagedList } from "src/infastructure/paging/paged-list";
import { PagingInfo } from "src/infastructure/paging/paging-info";

@Injectable()
export default class TaskService {
    private taskRepo: TaskRepository;

    constructor(protected entityManager: EntityManager) {
        this.taskRepo = entityManager.getCustomRepository(TaskRepository);
    }

    async get(): Promise<Task[]> {
        return await this.taskRepo.find();
    }

    async getPaged(pageIndex: number, pageSize: number): Promise<PagedList<Task>> {
        const page = new PagingInfo();
        page.PageIndex = pageIndex;
        page.PageSize = pageSize;
        return await this.taskRepo.getPaged(page);
    }
}
