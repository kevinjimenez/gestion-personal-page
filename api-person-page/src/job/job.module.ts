import { Module } from '@nestjs/common';
import { ProyectService } from './services/proyect.service';
import { JobService } from './services/job.service';
import { ResponsabilityService } from './services/responsability.service';
import { JobController } from './controllers/job.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Job, JobSchema } from './schemas/job.schema';
import { Proyect, ProyectSchema } from './schemas/proyect.schema';
import {
  Responsability,
  ResponsabilitySchema,
} from './schemas/responsability.schema';
import { ProyectController } from './controllers/proyect.controller';
import { ResponsabilityController } from './controllers/responsability.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Job.name, schema: JobSchema },
      { name: Proyect.name, schema: ProyectSchema },
      { name: Responsability.name, schema: ResponsabilitySchema },
    ]),
  ],
  providers: [ProyectService, JobService, ResponsabilityService],
  controllers: [JobController, ProyectController, ResponsabilityController],
})
export class JobModule {}
