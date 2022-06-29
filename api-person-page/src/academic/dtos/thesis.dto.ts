import { IsIn, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateThesisDto {
  @ApiProperty({
    description: 'Name thesis valid',
    example: 'App mobile',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'State thesis valid: 1 => article, 2 => proyect, 3 => examen',
    example: 0,
  })
  @IsNotEmpty()
  @IsIn([1, 2, 3])
  type: 1 | 2 | 3; //* 1 => article, 2 => proyect, 3 => examen

  @ApiProperty({
    description: 'Editorial thesis publish valid',
    example: 'Springer',
  })
  @IsNotEmpty()
  @IsString()
  editorial: string;
}

export class UpdateThesisDto extends PartialType(CreateThesisDto) {}
