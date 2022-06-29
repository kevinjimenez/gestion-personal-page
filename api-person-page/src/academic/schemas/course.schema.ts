import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Course extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  company: string;

  @Prop({ required: true })
  certificate: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  state: 0 | 1; //* 0 => progress, 1 => continue

  @Prop({ required: true })
  porcentage: number;

  @Prop({ required: true })
  dateStart: Date;

  @Prop({ required: true })
  dateEnd: Date;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
