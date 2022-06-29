import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiPersonPageModules } from './common/api-person-page.modules';
import { ConfigModule } from '@nestjs/config';
import config from './environment/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [config],
    }),
    ...ApiPersonPageModules,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
