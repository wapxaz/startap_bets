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

  //Получение списка всех пари, созданных конкретным пользователем.
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('users/:id_user')
  getBidsByIdUser(@Param('id_user') id_user: string): Promise<Bet[]> {
    return this.betsService.getBidsByIdUser(id_user);
  }

  //Получить список пари данной категории, например футбол
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('category/:id_category')
  getBetsByIdCategory(
    @Param('id_category') id_category: string,
  ): Promise<Bet[]> {
    return this.betsService.getBetsByIdCategory(id_category);
  }
}
