import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, Unique } from 'typeorm';
// Unique() expects an array of column names that should be unique
// this validation will happen at the database level (postgres will enforce this))
@Entity()
@Unique(['username'])
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    score: number;
}