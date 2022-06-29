import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Responsability extends Document {
  @Prop({ required: true })
  name: string;
}

export const ResponsabilitySchema =
  SchemaFactory.createForClass(Responsability);
