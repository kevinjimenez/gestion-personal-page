import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class SocialNetwork extends Document {
  @Prop({
    required: true,
  })
  name: string;

  @Prop({
    required: true,
  })
  url: string;
}

export const SocialNetworkSchema = SchemaFactory.createForClass(SocialNetwork);
