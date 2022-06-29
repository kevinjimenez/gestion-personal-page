import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contact } from '../schemas/contact.schema';
import { PrincipalService } from '../../common/principal.service';
import { CreateContactDto, UpdateContactDto } from '../dtos/contact.dto';

@Injectable()
export class ContactService extends PrincipalService<
  Contact,
  CreateContactDto,
  UpdateContactDto
> {
  constructor(
    @InjectModel(Contact.name)
    private readonly _contactModel: Model<Contact>,
  ) {
    super(_contactModel, new Logger(ContactService.name));
  }
}
