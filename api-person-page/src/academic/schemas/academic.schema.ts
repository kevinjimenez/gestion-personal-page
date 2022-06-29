import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Thesis } from './thesis.schema';

@Schema()
export class Academic extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  dateStart: Date;

  @Prop({ required: true })
  dateEnd: Date;

  @Prop({ required: true })
  state: 0 | 1; //* 0 => continue, 1 => graduated

  @Prop({ type: [{ type: Types.ObjectId, ref: Thesis.name }] })
  thesis: Types.Array<Thesis>;
}

export const AcademicSchema = SchemaFactory.createForClass(Academic);
