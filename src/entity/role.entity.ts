import Identifyable from 'src/infastructure/model/indentifyable';
import { Column, Entity, OneToMany, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import User from './user.entity';
import Permission from './permission.entity';

@Entity()
export default class Role extends Identifyable {
    @Column()
    public Name: string;

    @Column()
    public Code: string;

    @ManyToMany(type => Permission, p => p.Roles)
    public Permissions: Permission[];

    @ManyToMany(type => User, u => u.Roles)
    @JoinTable()
    public Users: User[];
}
