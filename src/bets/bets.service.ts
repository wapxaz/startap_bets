import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bet } from './schemas/bet.schema';
import { CreateBetDto } from './dto/create-bet.dto';
import { UsersService } from 'src/users/users.service';
import { checkIdForMongo } from 'src/tools/functions';

@Injectable()
export class BetsService {
  constructor(
    @InjectModel(Bet.name) private betsModel: Model<Bet>,
    private readonly usersService: UsersService,
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
      await this.usersService.checkUserById(betDto.id_user);
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

  async getBidsByIdUser(id_user: string): Promise<Bet[]> {
    try {
      await this.usersService.checkUserById(id_user);
      return await this.betsModel.find({ id_user });
    } catch (e) {
      throw new Error(e);
    }
  }

  //проверка на сущестование и корректный ввод ид пари для бд mongo
  async checkBetById(id: string): Promise<boolean> {
    try {
      checkIdForMongo(id);
      const bet = await this.getByIdBet(id);
      if (!bet) {
        throw new BadRequestException('Invalid entered id_bet');
      }
      return true;
    } catch (e) {
      throw new Error(e);
    }
  }

  //проверка на существование пари у этого пользователя
  async checkBetAndUserById(id_bet: string, id_user: string): Promise<boolean> {
    try {
      checkIdForMongo(id_bet);
      checkIdForMongo(id_user);
      const betForUser = await this.betsModel.find({
        _id: id_bet,
        id_user: id_user,
      });
      if (betForUser.length === 0) {
        throw new BadRequestException('Not found bet for this user');
      }
      return true;
    } catch (e) {
      throw new Error(e);
    }
  }
}
