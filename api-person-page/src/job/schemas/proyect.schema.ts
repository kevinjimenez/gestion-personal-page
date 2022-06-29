import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Proyect extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  type: 1 | 2 | 3; //* 1 => web, 2 => movil, 3 => other

  @Prop({ required: true })
  tecnology: string;

  @Prop({ required: true })
  state: 0 | 1 | 2; //* 0 => progress, 1 => finished, 2 => standby
}

export const ProyectSchema = SchemaFactory.createForClass(Proyect);
