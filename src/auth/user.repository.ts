import { Repository, EntityRepository } from 'typeorm';
import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { ConflictException, InternalServerErrorException } from '@nestjs/common';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        // destructure/pull username and password from authCredDto
        const { username, password } = authCredentialsDto;

        // create new entry for the user
        const user = new User();
        user.username = username;
        user.password = password;
        user.score = 0;

        // if a query throws an error but isn't handled then nestjs will throw a 500 server error by default
        // catch this error and handle it so it doesn't bubble up to nestjs
        try {
            await user.save();
        } catch (error) {
            if (error.code === '23505') {
                throw new ConflictException('Username already exists');
            } else {
                throw new InternalServerErrorException();
            }
        }
    }
}
