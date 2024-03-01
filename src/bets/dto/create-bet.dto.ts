import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsDefined,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateBetDto {
  @ApiProperty()
  @IsDefined()
  @IsString()
  id_user: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsDefined()
  @IsNumber()
  sum: number;

  @ApiProperty({ required: false })
  @IsOptional()
  categories: string[] | null;

  @IsDateString()
  @IsOptional()
  createdDate: Date;

  @ApiProperty()
  @IsDefined()
  @IsDateString()
  endDate: Date;
}
