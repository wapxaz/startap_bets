import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Users, UsersDoucument } from './schemas/users.schema';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private readonly usersModel: Model<UsersDoucument>,
  ) {}

  async getAll(): Promise<Users[]> {
    return await this.usersModel.find().exec();
  }

  async getById(id: string): Promise<Users> {
    return await this.usersModel.findById(id);
  }

  async create(userDto: CreateUserDto): Promise<Users> {
    const newUser = new this.usersModel(userDto);
    return newUser.save();
  }

  async remove(id: string): Promise<Users> {
    return await this.usersModel.findByIdAndDelete(id);
  }

  async update(id: string, userDto: UpdateUserDto): Promise<Users> {
    return await this.usersModel.findByIdAndUpdate(id, userDto, { new: true });
  }
}
