import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { BidsService } from './bids.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Bid } from './schemas/bid.schema';
import { CreateBidDto } from './dto/create-bid.dto';

@ApiTags('bids')
@Controller('bids')
export class BidsController {
  constructor(private readonly bidsService: BidsService) {}

  //Сделать ставку на определенное пари
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post(':id_bet')
  @HttpCode(HttpStatus.CREATED)
  createUser(
    @Body() createBidDto: CreateBidDto,
    @Param('id_bet') id_bet: string,
  ): Promise<Bid> {
    return this.bidsService.createBid(createBidDto, id_bet);
  }
}
