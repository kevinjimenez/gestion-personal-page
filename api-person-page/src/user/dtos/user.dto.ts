import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'Name valid',
    example: 'Bruce',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Last name valid',
    example: 'Bruce',
  })
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @ApiProperty({
    description: 'Description valid',
    example: 'I am batman',
  })
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  curriculum: string;

  @IsNotEmpty()
  @IsString()
  photo: string;

  @ApiProperty({
    description: 'Array id of skills is optianal value',
    example: "[ '12adsdas','asd2032' ]",
  })
  @IsOptional()
  @IsArray()
  skills: string[];

  @IsOptional()
  @IsArray()
  contacts: string[];

  @IsOptional()
  @IsArray()
  gitRepositories: string[];

  @IsOptional()
  @IsArray()
  socialNetworks: string[];

  @IsOptional()
  @IsArray()
  jobs: string[];

  @IsOptional()
  @IsArray()
  proyects: string[];

  @IsOptional()
  @IsArray()
  academics: string[];

  @IsOptional()
  @IsArray()
  contests: string[];

  @IsOptional()
  @IsArray()
  courses: string[];
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
