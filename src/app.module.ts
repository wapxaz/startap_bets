import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { BetsModule } from './bets/bets.module';
import { BidsModule } from './bids/bids.module';
import { CategoriesModule } from './categories/categories.module';
import { EvidencesModule } from './evidences/evidences.module';
import { BalancesModule } from './balances/balances.module';

@Module({
  imports: [UsersModule, AuthModule, BetsModule, BidsModule, CategoriesModule, EvidencesModule, BalancesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
