import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private usersModel: Model<User>) {}

  async getAll(): Promise<User[]> {
    return await this.usersModel.find().exec();
  }

  async getById(id: string): Promise<User> {
    return await this.usersModel.findById(id);
  }

  async create(userDto: CreateUserDto): Promise<User> {
    const newUser = new this.usersModel(userDto);
    return newUser.save();
  }

  async remove(id: string): Promise<User> {
    return await this.usersModel.findByIdAndDelete(id);
  }

  async update(id: string, userDto: UpdateUserDto): Promise<User> {
    return await this.usersModel.findByIdAndUpdate(id, userDto, { new: true });
  }
}
