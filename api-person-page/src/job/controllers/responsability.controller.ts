import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ResponsabilityService } from '../services/responsability.service';
import { CreateResponsabilityDto, UpdateResponsabilityDto } from '../dtos/responsability.dto';

@ApiTags('responsability')
@Controller('responsability')
export class ResponsabilityController {
  constructor(private readonly _responsabilityService: ResponsabilityService) {}

  @ApiOperation({ summary: 'Get all responsabilities' })
  @Get()
  getAll() {
    return this._responsabilityService.findAllOrById();
  }

  @ApiOperation({ summary: 'Create responsability' })
  @Post()
  createOne(@Body() payload: CreateResponsabilityDto) {
    return this._responsabilityService.saveOne(payload);
  }

  @ApiOperation({ summary: 'Update responsability' })
  @Put(':id')
  updateOneById(@Body() payload: UpdateResponsabilityDto, @Param('id') id: string) {
    return this._responsabilityService.updateOneById(id, payload);
  }

  @ApiOperation({ summary: 'Get one responsability by id' })
  @Get(':id')
  getById(@Param('id') id: string) {
    return this._responsabilityService.findAllOrById(id);
  }
}
