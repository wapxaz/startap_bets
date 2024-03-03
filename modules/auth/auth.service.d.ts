import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/modules/users/users.service';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<any>;
    login(email: string, password: string): Promise<{
        access_token: string;
    }>;
}
