import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get()
  getAllUsers(): Promise<User[]> {
    return this.usersService.getAllUsers();
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getByIdUser(@Param('id') id: string): Promise<User> {
    return this.usersService.getByIdUser(id);
  }

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(createUserDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  removeUser(@Param('id') id: string): Promise<User> {
    return this.usersService.removeUser(id);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  updateUser(
    @Body() updateUserDto: UpdateUserDto,
    @Param('id') id: string,
  ): Promise<User> {
    return this.usersService.updateUser(id, updateUserDto);
  }
}
