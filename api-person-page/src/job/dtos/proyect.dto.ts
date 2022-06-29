import { IsIn, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateProyectDto {
  @ApiProperty({
    description: 'Name proyect valid',
    example: 'Kiosko web',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Type valid, 1 => web, 2 => movil, 3 => other',
    example: '0',
  })
  @IsNotEmpty()
  @IsIn([1, 2, 3])
  type: 1 | 2 | 3; //* 1 => web, 2 => movil, 3 => other

  @ApiProperty({
    description: 'tecnology build proyect valid',
    example: 'Javascritp',
  })
  @IsNotEmpty()
  @IsString()
  tecnology: string;

  @ApiProperty({
    description:
      'State proyect valid, 0 => progress, 1 => finished, 2 => standby',
    example: '0',
  })
  @IsNotEmpty()
  @IsIn([0, 1, 2])
  state: 0 | 1 | 2; //* 0 => progress, 1 => finished, 2 => standby
}

export class UpdateProyectDto extends PartialType(CreateProyectDto) {}
