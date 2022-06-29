import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateContestDto {
  @ApiProperty({
    description: 'Name contest valid',
    example: 'Coding dojo',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Company  valid',
    example: 'Devsu',
  })
  @IsNotEmpty()
  @IsString()
  company: string;

  @ApiProperty({
    description: 'Description contest valid',
    example: 'Better developer',
  })
  @IsNotEmpty()
  @IsString()
  description: string;
}

export class UpdateContestDto extends PartialType(CreateContestDto) {}
