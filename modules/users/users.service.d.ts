/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import { UpdateBalanceUserDto } from './dto/update-balance-user.dto';
export declare class UsersService {
    private usersModel;
    private readonly jwtService;
    constructor(usersModel: Model<User>, jwtService: JwtService);
    getAllUsers(): Promise<User[]>;
    getByIdUser(id: string): Promise<User>;
    createUser(userDto: CreateUserDto): Promise<User>;
    removeUser(id: string): Promise<User>;
    updateUser(id: string, userDto: UpdateUserDto): Promise<User>;
    updateUserBalance(id: string, updateBalanceUserDto: UpdateBalanceUserDto): Promise<User>;
    getUserBalanceById(id_user: string): Promise<number>;
    findOne(email: string): Promise<User | undefined>;
    checkUserById(id: string): Promise<boolean>;
}
