import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configurations from 'src/core/config/configurations';
import { AppController } from './app.controller';
import { Modules } from './modules/module';
// import { LoggerMiddleware } from 'src/core/middleware/logger.middleware';

const ENV = process.env.NODE_ENV;
console.log('ENV', process.env.NODE_ENV);
console.log('ENV Path', `${process.env.NODE_ENV}.env`);

// debugger;
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configurations],

      envFilePath: process.env.NODE_ENV
        ? `${process.env.NODE_ENV}.env`
        : '.env',
      // envFilePath: process.env.NODE_ENV === 'development' && 'development.env',
    }),
    ...Modules,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
