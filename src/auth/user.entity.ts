import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, Unique } from 'typeorm';
import * as bcrypt from 'bcrypt';

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
    salt: string;

    @Column()
    score: number;

    // this custom method takes the password from the signIn request body (which might not be correct) and validates it against the actual password
    async validatePassword(password: string): Promise<boolean> {
        // here we hash the password in question with the unique salt for this user
        const hash = await bcrypt.hash(password, this.salt);
        // if the password is correct then the hashes should match since they both use the same salt (and the same password)
        return hash === this.password;
    }
}