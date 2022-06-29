import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { SkillService } from '../services/skill.service';
import { CreateSkillDto, UpdateSkillDto } from '../dtos/skill.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('skill')
@Controller('skill')
export class SkillController {
  constructor(private readonly _skillService: SkillService) {}

  @ApiOperation({ summary: 'List of skills' })
  @Get()
  getAll() {
    return this._skillService.findAllOrById();
  }

  @ApiOperation({ summary: 'Create skill' })
  @Post()
  createOne(@Body() payload: CreateSkillDto) {
    return this._skillService.saveOne(payload);
  }

  @ApiOperation({ summary: 'Update skill' })
  @Put(':id')
  updateOneById(@Param('id') id: string, @Body() payload: UpdateSkillDto) {
    return this._skillService.updateOneById(id, payload);
  }

  @ApiOperation({ summary: 'Get a skill by id' })
  @Get(':id')
  getById(@Param('id') id: string) {
    return this._skillService.findAllOrById(id);
  }
}
