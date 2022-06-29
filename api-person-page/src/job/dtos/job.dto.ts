import {
  IsArray,
  IsDate,
  IsEmpty,
  IsIn,
  IsNotEmpty, IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateJobDto {
  @ApiProperty({
    description: 'Company valid',
    example: 'Creditu',
  })
  @IsNotEmpty()
  @IsString()
  company: string;

  @ApiProperty({
    description: 'position job valid',
    example: 'Developer',
  })
  @IsNotEmpty()
  @IsString()
  position: string;

  @ApiProperty({
    description: 'Date start valid',
    example: '2022-06-01',
  })
  @IsNotEmpty()
  @IsDate()
  dateStart: Date;

  @ApiProperty({
    description: 'Date end valid',
    example: 'yyyy-mm-dd',
  })
  @IsNotEmpty()
  @IsDate()
  dateEnd: Date;

  @ApiProperty({
    description: 'State job valid, 0 => end, 1 => continue',
    example: '0',
  })
  @IsNotEmpty()
  @IsIn([0, 1])
  state: 0 | 1; //* 0 => end, 1 => continue

  @IsOptional()
  @IsArray()
  proyects: string[];

  @IsOptional()
  @IsArray()
  responsabilities: string[];
}

export class UpdateJobDto extends PartialType(CreateJobDto) {}
