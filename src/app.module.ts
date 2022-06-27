import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './moddlewares/logger.middleware';
import { UsersModule } from './users/users.module';

// 이런 형태의 사용 가능
// const getEnv = () => {
//   axios.get('asdads')
//   return {
//     DB_PASWORD: 'nodejsbook',
//     NAME: 'test',
//   };
// };

@Module({
  // imports: [ConfigModule.forRoot({ isGlobal: true, load: [getEnv] })],
  imports: [ConfigModule.forRoot({ isGlobal: true }), UsersModule],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
