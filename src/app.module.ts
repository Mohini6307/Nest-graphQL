import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AppGraphqlModule } from './graphql/graphql.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    DbModule,
    UserModule,
    AuthModule,
    AppGraphqlModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
