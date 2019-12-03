import { EntityRepository, Repository } from 'typeorm';
import BaseRepository from 'src/infastructure/base/base.respository';
import Task from 'src/entity/task.entity';

@EntityRepository(Task)
export default class TaskRepository extends BaseRepository<Task> {
}
