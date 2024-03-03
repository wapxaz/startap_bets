"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const bcrypt_1 = require("bcrypt");
const mongoose_2 = require("@nestjs/mongoose");
const user_schema_1 = require("./schemas/user.schema");
const jwt_1 = require("@nestjs/jwt");
const functions_1 = require("../../tools/functions");
let UsersService = class UsersService {
    constructor(usersModel, jwtService) {
        this.usersModel = usersModel;
        this.jwtService = jwtService;
    }
    async getAllUsers() {
        try {
            return await this.usersModel
                .find()
                .select(['name', 'username', 'email', 'balance', 'createdAt']);
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async getByIdUser(id) {
        try {
            return await this.usersModel
                .findById(id)
                .select(['name', 'username', 'email', 'balance', 'createdAt']);
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async createUser(userDto) {
        try {
            const salt = await (0, bcrypt_1.genSalt)(10);
            const hashPassword = await (0, bcrypt_1.hash)(userDto.password, salt);
            const newUser = new this.usersModel({
                ...userDto,
                password: hashPassword,
            }).save();
            return newUser;
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async removeUser(id) {
        try {
            return await this.usersModel.findByIdAndDelete(id);
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async updateUser(id, userDto) {
        try {
            return await this.usersModel.findByIdAndUpdate(id, userDto, {
                new: true,
            });
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async updateUserBalance(id, updateBalanceUserDto) {
        try {
            return await this.usersModel.findByIdAndUpdate(id, { balance: updateBalanceUserDto.balance }, {
                new: true,
            });
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async getUserBalanceById(id_user) {
        try {
            (0, functions_1.checkIdForMongo)(id_user);
            const user = await this.usersModel.findById(id_user);
            return user.balance;
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async findOne(email) {
        try {
            return await this.usersModel.findOne({
                email,
            });
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async checkUserById(id) {
        try {
            if (!id.match(/^[0-9a-fA-F]{24}$/)) {
                throw new common_1.BadRequestException('Invalid entered id_user');
            }
            const user = await this.getByIdUser(id);
            if (!user) {
                throw new common_1.BadRequestException('Invalid entered id_user');
            }
            return true;
        }
        catch (e) {
            throw new Error(e);
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        jwt_1.JwtService])
], UsersService);
//# sourceMappingURL=users.service.js.map