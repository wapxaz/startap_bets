import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { genSalt, hash } from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private usersModel: Model<User>) {}

  async getAllUsers(): Promise<User[]> {
    try {
      return await this.usersModel
        .find()
        .select(['name', 'username', 'email', 'createdAt']);
    } catch (e) {
      throw new Error(e);
    }
  }

  async getByIdUser(id: string): Promise<User> {
    try {
      return await this.usersModel
        .findById(id)
        .select(['name', 'username', 'email', 'createdAt']);
    } catch (e) {
      throw new Error(e);
    }
  }

  async createUser(userDto: CreateUserDto): Promise<User> {
    try {
      const salt = await genSalt(10);
      const hashPassword = await hash(userDto.password, salt);

      const newUser = new this.usersModel({
        ...userDto,
        password: hashPassword,
      });
      return await newUser.save();
    } catch (e) {
      throw new Error(e);
    }
  }

  async removeUser(id: string): Promise<User> {
    try {
      return await this.usersModel.findByIdAndDelete(id);
    } catch (e) {
      throw new Error(e);
    }
  }

  async updateUser(id: string, userDto: UpdateUserDto): Promise<User> {
    try {
      return await this.usersModel.findByIdAndUpdate(id, userDto, {
        new: true,
      });
    } catch (e) {
      throw new Error(e);
    }
  }
}
