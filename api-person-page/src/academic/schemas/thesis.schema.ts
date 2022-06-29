import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Thesis extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  type: 1 | 2 | 3; //* 1 => article, 2 => proyect, 3 => examen

  @Prop()
  editorial: string;
}

export const ThesisSchema = SchemaFactory.createForClass(Thesis);
