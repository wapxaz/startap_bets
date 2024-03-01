import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LoginDto } from './dto/login.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  //async login(@Request() req):  {
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto.email, loginDto.password);
  }

  // @UseGuards(JwtAuthGuard)
  // @Get('profile')
  // getProfile(@Request() req) {
  //   return req.user;
  // }
}
