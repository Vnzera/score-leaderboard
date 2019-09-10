import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {
    // inject UserRepository so we can use it's methods/logic
    // it is stored in the private variable 'userRepository' ie userRepository.method()
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
    ) { }
}
