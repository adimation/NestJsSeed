import Identifyable from './indentifyable';
import { Column } from 'typeorm';

export abstract class Auditable extends Identifyable {
    @Column()
    public CreatedBy: string;
    @Column()
    public CreatedOn: Date;
    @Column()
    public UpdatedBy: string;
    @Column()
    public UpdatedOn: Date;
}