import { BasicStrategy } from 'passport-http';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserLoginService } from './user-login.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(BasicStrategy) {
  constructor(private userLoginService: UserLoginService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    console.log('Validating user:', username);
    const user = await this.userLoginService.validateUser(username, password);
    if (!user) {
      console.log('User not found or invalid password');
      throw new UnauthorizedException();
    }
    return user;
  }
}
