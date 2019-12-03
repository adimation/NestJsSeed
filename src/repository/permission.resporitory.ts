import { EntityRepository } from 'typeorm';
import Permission from 'src/entity/permission.entity';
import BaseRepository from 'src/infastructure/base/base.respository';

@EntityRepository(Permission)
export class PermissionRepository extends BaseRepository<Permission> {
}
