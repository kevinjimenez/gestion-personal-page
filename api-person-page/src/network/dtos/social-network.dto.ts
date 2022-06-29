import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateSocialNetworkDto {
  @ApiProperty({
    description: 'Name social network valid',
    example: 'Facebook',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Url social network valid',
    example: 'https://facebook.com',
  })
  @IsNotEmpty()
  @IsString()
  url: string;
}

export class UpdateSocialNetworkDto extends PartialType(
  CreateSocialNetworkDto,
) {}
