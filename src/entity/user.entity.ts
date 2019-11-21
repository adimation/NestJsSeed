import Identifyable from 'src/infastructure/model/indentifyable';
import { Column, Entity, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import Role from './role.entity';

@Entity()
export default class User extends Identifyable {
    @Column()
    public UserName: string;

    @Column()
    public Password: string;

    @ManyToMany(type => Role, r => r.Users)
    public Roles: Role[];
}
