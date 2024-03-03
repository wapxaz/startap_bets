import { UsersService } from './users.service';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateBalanceUserDto } from './dto/update-balance-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAllUsers(): Promise<User[]>;
    getByIdUser(id: string): Promise<User>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
    removeUser(id: string): Promise<User>;
    updateUser(updateUserDto: UpdateUserDto, id: string): Promise<User>;
    updateUserBalance(updateBalanceUserDto: UpdateBalanceUserDto, id_user: string): Promise<User>;
}
