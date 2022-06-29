import { IsIn, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateContactDto {
  @ApiProperty({
    description: 'type conatct: 1 => email, 2 => phone, 3 => address',
    example: '1',
  })
  @IsNotEmpty()
  @IsIn([1, 2, 3])
  type: 1 | 2 | 3; //* 1 => email, 2 => phone, 3 => address

  @ApiProperty({
    description: 'value of contact',
    example: 'xxxxx@gmail.com',
  })
  @IsNotEmpty()
  @IsString()
  value: string;
}

export class UpdateContactDto extends PartialType(CreateContactDto) {}
