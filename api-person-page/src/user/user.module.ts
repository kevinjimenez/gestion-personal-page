import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { SkillService } from './services/skill.service';
import { ContactService } from './services/contact.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { Skill, SkillSchema } from './schemas/skill.schema';
import { Contact, ContactSchema } from './schemas/contact.schema';
import { ContactController } from './controllers/contact.controller';
import { SkillController } from './controllers/skill.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Skill.name, schema: SkillSchema },
      { name: Contact.name, schema: ContactSchema },
    ]),
  ],
  controllers: [UserController, ContactController, SkillController],
  providers: [UserService, SkillService, ContactService],
})
export class UserModule {}
