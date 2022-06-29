import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateCourseDto {
  @ApiProperty({
    description: 'Name course valid',
    example: 'Angular cero a heroe',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Company valid',
    example: 'Udemy',
  })
  @IsNotEmpty()
  @IsString()
  company: string;

  @ApiProperty({
    description: 'Certificate',
    example: 'File',
  })
  @IsNotEmpty()
  @IsString()
  certificate: string;

  @ApiProperty({
    description: 'Description course valid',
    example: 'Better course',
  })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({
    description: 'State course valid: 0 => progress, 1 => continue',
    example: 0,
  })
  @IsNotEmpty()
  state: 0 | 1; //* 0 => progress, 1 => continue

  @ApiProperty({
    description: 'Porcentage course valid',
    example: 90.0,
  })
  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  porcentage: number;

  @ApiProperty({
    description: 'Date start course valid',
    example: '2002-01-01',
  })
  @IsNotEmpty()
  @IsDate()
  dateStart: Date;

  @ApiProperty({
    description: 'Date end course valid',
    example: '2002-01-01',
  })
  @IsNotEmpty()
  @IsDate()
  dateEnd: Date;
}

export class UpdateCourseDto extends PartialType(CreateCourseDto) {}
