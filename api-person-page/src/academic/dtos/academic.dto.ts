import { IsArray, IsDate, IsIn, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateAcademicDto {
  @ApiProperty({
    description: 'Name academic valid',
    example: 'EPN (Escuela politecnica nacional)',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Name title valid',
    example: 'Ing Sistemas',
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Date start valid',
    example: '2022-06-01',
  })
  @IsNotEmpty()
  @IsDate()
  dateStart: Date;

  @ApiProperty({
    description: 'Date end valid',
    example: '2022-06-01',
  })
  @IsNotEmpty()
  @IsDate()
  dateEnd: Date;

  @ApiProperty({
    description: 'State valid: 0 => continue, 1 => graduated',
    example: '0',
  })
  @IsNotEmpty()
  @IsIn([0, 1])
  state: 0 | 1; //* 0 => continue, 1 => graduated

  @IsOptional()
  @IsArray()
  thesis: string[];
}

export class UpdateAcademicDto extends PartialType(CreateAcademicDto) {}
