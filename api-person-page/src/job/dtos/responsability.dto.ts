import { IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateResponsabilityDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}

export class UpdateResponsabilityDto extends PartialType(
  CreateResponsabilityDto,
) {}
