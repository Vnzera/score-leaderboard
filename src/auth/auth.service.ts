import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Injectable()
export class AuthService {
    // inject UserRepository so we can use it's methods/logic
    // it is stored in the private variable 'userRepository' ie userRepository.method()
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
    ) { }

    async signUp(authCredentialsDto: AuthCredentialsDto) {
        return this.userRepository.signUp(authCredentialsDto);
    }
}
