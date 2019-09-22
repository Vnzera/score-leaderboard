import { IsString, MinLength, MaxLength, Matches } from 'class-validator';

// this data will be used in many places such as the sign up and sign in route
// we can  use the class-validator package to set validation rules that work well with the validation pipe from nestjs

export class AuthCredentialsDto {
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: string;

    @IsString()
    @MinLength(8)
    @MaxLength(20)
    @Matches(
        /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        { message: 'The password is too weak' },
    )
    password: string;
}
