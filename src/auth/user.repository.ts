import { Repository, EntityRepository } from 'typeorm';
import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

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
        await user.save();
    }
}
