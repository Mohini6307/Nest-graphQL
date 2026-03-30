import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    forwardRef(() => UserModule),
    JwtModule.registerAsync({
      imports: [ConfigModule], // required
      inject: [ConfigService], // inject dependency
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET')!, // ensure not undefined
        expiresIn: configService.get<string>('JWT_EXPIRES_IN') || '1h',
      })
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule { }
