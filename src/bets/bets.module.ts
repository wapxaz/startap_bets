import { Module } from '@nestjs/common';
import { BetsService } from './bets.service';
import { BetsController } from './bets.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Bet, BetSchema } from './schemas/bet.schema';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [BetsController],
  providers: [BetsService],
  imports: [
    MongooseModule.forFeature([{ name: Bet.name, schema: BetSchema }]),
    UsersModule,
  ],
  exports: [BetsService],
})
export class BetsModule {}
