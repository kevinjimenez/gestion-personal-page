import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import config from '../environment/config';
import { ConfigType } from '@nestjs/config';

@Global()
@Module({
  imports: [
    MongooseModule.forRootAsync({
      inject: [config.KEY],
      useFactory: async (_configService: ConfigType<typeof config>) => {
        const { db } = _configService;
        const { mongo } = db;
        const { dbName, host, password, user, connection } = mongo;
        return {
          uri: `${connection}://${user}:${password}@${host}/${dbName}?`,
          // user,
          // pass: password,
          // dbName,
        };
      },
    }),
  ],
})
export class DatabaseModule {
}
