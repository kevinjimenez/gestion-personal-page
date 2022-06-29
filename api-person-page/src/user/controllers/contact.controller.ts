import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ContactService } from '../services/contact.service';
import { CreateContactDto, UpdateContactDto } from '../dtos/contact.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('contact')
@Controller('contact')
export class ContactController {
  constructor(private readonly _contactService: ContactService) {}

  @ApiOperation({ summary: 'Get all contacts' })
  @Get()
  getAll() {
    return this._contactService.findAllOrById();
  }

  @ApiOperation({ summary: 'Create contact' })
  @Post()
  createOne(@Body() payload: CreateContactDto) {
    return this._contactService.saveOne(payload);
  }

  @ApiOperation({ summary: 'Update contact' })
  @Put(':id')
  updateOneById(@Body() payload: UpdateContactDto, @Param('id') id: string) {
    return this._contactService.updateOneById(id, payload);
  }

  @ApiOperation({ summary: 'Get one contact by id' })
  @Get(':id')
  getById(@Param('id') id: string) {
    return this._contactService.findAllOrById(id);
  }
}
