import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { BetsService } from './bets.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Bet } from './schemas/bet.schema';
import { CreateBetDto } from './dto/create-bet.dto';

@ApiTags('bets')
@Controller('bets')
export class BetsController {
  constructor(private readonly betsService: BetsService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get()
  getAllUsers(): Promise<Bet[]> {
    return this.betsService.getAllBets();
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getByIdUser(@Param('id') id: string): Promise<Bet> {
    return this.betsService.getByIdBet(id);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  createUser(@Body() createBetDto: CreateBetDto): Promise<Bet> {
    return this.betsService.createBet(createBetDto);
  }
}
