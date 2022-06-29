import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateGitRepositoryDto {
  @ApiProperty({
    description: 'Name repository valid',
    example: 'Github',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Url valid of repository',
    example: 'https://github.com',
  })
  @IsNotEmpty()
  @IsString()
  url: string;
}

export class UpdateGitRepositoryDto extends PartialType(
  CreateGitRepositoryDto,
) {}
