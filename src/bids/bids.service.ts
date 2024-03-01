import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Bid } from './schemas/bid.schema';
import { Model } from 'mongoose';
import { UsersService } from 'src/users/users.service';
import { CreateBidDto } from './dto/create-bid.dto';
import { BetsService } from 'src/bets/bets.service';

@Injectable()
export class BidsService {
  constructor(
    @InjectModel(Bid.name) private bidsModel: Model<Bid>,
    private readonly usersService: UsersService,
    private readonly betsService: BetsService,
  ) {}

  async createBid(createBidDto: CreateBidDto, id_bet: string): Promise<Bid> {
    try {
      await this.betsService.checkBetById(id_bet);
      await this.usersService.checkUserById(createBidDto.id_offered_user);
      await this.usersService.checkUserById(createBidDto.id_argued_user);
      await this.betsService.checkBetAndUserById(
        id_bet,
        createBidDto.id_offered_user,
      );
      const newBid = await new this.bidsModel({
        id_bet: id_bet,
        id_offered_user: createBidDto.id_offered_user,
        id_argued_user: createBidDto.id_argued_user,
        sum: createBidDto.sum,
      }).save();
      return newBid;
    } catch (e) {
      throw new Error(e);
    }
  }
}
