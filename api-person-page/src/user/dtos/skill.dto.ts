import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSkillDto {
  @ApiProperty({
    description: 'Name skill valid',
    example: 'Node js',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Value number valid',
    example: '100.00',
  })
  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  porcentage: number;
}

export class UpdateSkillDto extends PartialType(CreateSkillDto) {}
