import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Contact extends Document {
  @Prop({
    required: true,
  })
  type: 1 | 2 | 3; //* 1 => email, 2 => phone, 3 => address

  @Prop({
    required: true,
  })
  value: string;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
