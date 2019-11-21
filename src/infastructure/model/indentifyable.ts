import { BaseEntity, PrimaryGeneratedColumn } from 'typeorm';

export default abstract class Identifyable extends BaseEntity {
    @PrimaryGeneratedColumn()
    public Id: Number;
}