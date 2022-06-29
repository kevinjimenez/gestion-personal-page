import { AuthModule } from '../auth/auth.module';
import { JobModule } from '../job/job.module';
import { UserModule } from '../user/user.module';
import { NetworkModule } from '../network/network.module';
import { AcademicModule } from '../academic/academic.module';
import { DatabaseModule } from '../database/database.module';

export const ApiPersonPageModules = [
  AuthModule,
  JobModule,
  UserModule,
  NetworkModule,
  AcademicModule,

  //! Module global
  DatabaseModule,
];
