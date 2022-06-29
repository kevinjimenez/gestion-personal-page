import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Proyect } from './proyect.schema';
import { Responsability } from './responsability.schema';

@Schema()
export class Job extends Document {
  @Prop({ required: true })
  company: string;

  @Prop({ required: true })
  position: string;

  @Prop({ required: true })
  dateStart: Date;

  @Prop({ required: true })
  dateEnd: Date;

  @Prop({ required: true })
  state: 0 | 1; //* 0 => end, 1 => continue

  @Prop({ type: [{ type: Types.ObjectId, ref: Proyect.name }] })
  proyects: Types.Array<Proyect>;

  @Prop({ type: [{ type: Types.ObjectId, ref: Responsability.name }] })
  responsabilities: Types.Array<Responsability>;
}

export const JobSchema = SchemaFactory.createForClass(Job);
