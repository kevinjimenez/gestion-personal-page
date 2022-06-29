import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Skill } from './skill.schema';
import { Contact } from './contact.schema';
import { GitRepository } from '../../network/schemas/git-repository.schema';
import { SocialNetwork } from '../../network/schemas/social-network.schema';
import { Job } from '../../job/schemas/job.schema';
import { Proyect } from '../../job/schemas/proyect.schema';
import { Academic } from '../../academic/schemas/academic.schema';
import { Contest } from '../../academic/schemas/contest.schema';
import { Course } from '../../academic/schemas/course.schema';

@Schema()
export class User extends Document {
  @Prop({
    required: true,
  })
  name: string;

  @Prop({
    required: true,
  })
  lastName: string;

  @Prop({
    required: true,
  })
  description: string;

  @Prop()
  curriculum: string;

  @Prop()
  photo: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: Skill.name }] })
  skills: Types.Array<Skill>;

  @Prop({ type: [{ type: Types.ObjectId, ref: Contact.name }] })
  contacts: Types.Array<Contact>;

  @Prop({ type: [{ type: Types.ObjectId, ref: GitRepository.name }] })
  gitRepositories: Types.Array<GitRepository>;

  @Prop({ type: [{ type: Types.ObjectId, ref: SocialNetwork.name }] })
  socialNetworks: Types.Array<SocialNetwork>;

  @Prop({ type: [{ type: Types.ObjectId, ref: Job.name }] })
  jobs: Types.Array<Job>;

  @Prop({ type: [{ type: Types.ObjectId, ref: Proyect.name }] })
  proyects: Types.Array<Proyect>;

  @Prop({ type: [{ type: Types.ObjectId, ref: Academic.name }] })
  academics: Types.Array<Academic>;

  @Prop({ type: [{ type: Types.ObjectId, ref: Contest.name }] })
  contests: Types.Array<Contest>;

  @Prop({ type: [{ type: Types.ObjectId, ref: Course.name }] })
  courses: Types.Array<Course>;
}

export const UserSchema = SchemaFactory.createForClass(User);
