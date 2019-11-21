import Identifyable from 'src/infastructure/model/indentifyable';
import { Column, Entity, OneToMany, ManyToOne, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export default class Task extends Identifyable {
    @Column()
    public Name: string;
}
