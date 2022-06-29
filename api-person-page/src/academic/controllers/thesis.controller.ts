import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ThesisService } from '../services/thesis.service';
import { CreateThesisDto, UpdateThesisDto } from '../dtos/thesis.dto';

@ApiTags('thesis')
@Controller('thesis')
export class ThesisController {
  constructor(private readonly _thesisService: ThesisService) {}

  @ApiOperation({ summary: 'Get all jobs' })
  @Get()
  getAll() {
    return this._thesisService.findAllOrById();
  }

  @ApiOperation({ summary: 'Create job' })
  @Post()
  createOne(@Body() payload: CreateThesisDto) {
    return this._thesisService.saveOne(payload);
  }

  @ApiOperation({ summary: 'Update job' })
  @Put(':id')
  updateOneById(@Body() payload: UpdateThesisDto, @Param('id') id: string) {
    return this._thesisService.updateOneById(id, payload);
  }

  @ApiOperation({ summary: 'Get one job by id' })
  @Get(':id')
  getById(@Param('id') id: string) {
    return this._thesisService.findAllOrById(id);
  }
}
