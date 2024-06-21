import { Module } from '@nestjs/common';
import { UserLoginService } from './user-login.service';
import { UserLoginController } from './user-login.controller';
import UserLoginRepository from './user-login.repository';
import { LocalStrategy } from './local.strategy';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [UserLoginService, UserLoginRepository, LocalStrategy, JwtService],
  exports: [UserLoginService],
  controllers: [UserLoginController],
})
export class UserLoginModule {}
