import { Module } from '@nestjs/common';
import { UserLoginService } from './user-login.service';
import { UserLoginController } from './user-login.controller';
import UserLoginRepository from './user-login.repository';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [UserLoginService, UserLoginRepository, JwtService],
  exports: [UserLoginService],
  controllers: [UserLoginController],
})
export class UserLoginModule {}
