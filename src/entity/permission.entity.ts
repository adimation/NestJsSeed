import Identifyable from 'src/infastructure/model/indentifyable';
import { Column, Entity, OneToMany, ManyToOne, JoinTable, ManyToMany } from 'typeorm';
import Role from './role.entity';

@Entity()
export default class Permission extends Identifyable {
    @Column()
    public Name: string;

    @Column()
    public Code: string;

    @ManyToMany(type => Role, r => r.Permissions)
    @JoinTable()
    public Roles: Role[];
}
