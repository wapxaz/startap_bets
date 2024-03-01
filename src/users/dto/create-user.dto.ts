import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsString()
  password: string;

  @IsDateString()
  @IsOptional()
  createdAt: Date;
}
