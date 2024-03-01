import { UsersService } from 'src/users/users.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Bet } from './schemas/bet.schema';
import { Model } from 'mongoose';
import { CreateBetDto } from './dto/create-bet.dto';

@Injectable()
export class BetsService {
  constructor(
    @InjectModel(Bet.name) private betsModel: Model<Bet>,
    private readonly UsersService: UsersService,
  ) {}

  async getAllBets(): Promise<Bet[]> {
    try {
      return await this.betsModel.find();
    } catch (e) {
      throw new Error(e);
    }
  }

  async getByIdBet(id: string): Promise<Bet> {
    try {
      return await this.betsModel.findById(id);
    } catch (e) {
      throw new Error(e);
    }
  }

  async createBet(betDto: CreateBetDto): Promise<Bet> {
    try {
      if (!betDto.id_user.match(/^[0-9a-fA-F]{24}$/)) {
        throw new BadRequestException('Invalid entered id_user');
      }
      const user = await this.UsersService.getByIdUser(betDto.id_user);
      if (!user) {
        throw new BadRequestException('Invalid entered id_user');
      }
      const nowDate = new Date();
      const endDate = new Date(betDto.endDate);
      if (endDate.getTime() < nowDate.getTime()) {
        throw new BadRequestException('End date must be more than now');
      }
      const newBet = await new this.betsModel(betDto).save();
      return newBet;
    } catch (e) {
      throw new Error(e);
    }
  }
}
