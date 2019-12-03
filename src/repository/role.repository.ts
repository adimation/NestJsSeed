import { EntityRepository } from 'typeorm';
import Role from 'src/entity/role.entity';
import BaseRepository from 'src/infastructure/base/base.respository';

@EntityRepository(Role)
export class RoleRepository extends BaseRepository<Role> {
}
