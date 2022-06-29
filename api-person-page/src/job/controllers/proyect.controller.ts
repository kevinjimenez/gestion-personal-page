import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ProyectService } from '../services/proyect.service';
import { CreateProyectDto, UpdateProyectDto } from '../dtos/proyect.dto';

@ApiTags('proyect')
@Controller('proyect')
export class ProyectController {
  constructor(private readonly _proyectService: ProyectService) {}

  @ApiOperation({ summary: 'Get all proyects' })
  @Get()
  getAll() {
    return this._proyectService.findAllOrById();
  }

  @ApiOperation({ summary: 'Create proyect' })
  @Post()
  createOne(@Body() payload: CreateProyectDto) {
    return this._proyectService.saveOne(payload);
  }

  @ApiOperation({ summary: 'Update proyect' })
  @Put(':id')
  updateOneById(@Body() payload: UpdateProyectDto, @Param('id') id: string) {
    return this._proyectService.updateOneById(id, payload);
  }

  @ApiOperation({ summary: 'Get one proyect by id' })
  @Get(':id')
  getById(@Param('id') id: string) {
    return this._proyectService.findAllOrById(id);
  }
}
