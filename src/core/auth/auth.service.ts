// src/auth/auth.service.ts
import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserLoginService } from 'src/modules/user-login/user-login.service';

@Injectable()
export class AuthService {
  constructor(
    private userLoginService: UserLoginService,
    private jwtService: JwtService,
  ) {}

  // async validateUser(username: string, password: string): Promise<any> {
  //   // const user = await this.usersService.findOneByUsername(username); TODO: uncomment this later and remove following line
  //   const user = { userId: 1, username: 'test', password: 'test@123' };
  //   if (user && user.password === password) {
  //     const { password, ...result } = user;
  //     return result;
  //   }
  //   return null;
  // }
  async validateUser(username: string, password: string): Promise<any> {
    debugger;
    const user = await this.userLoginService.findUserName(username);
    console.log('user1:', user);
    if (!user) {
      throw new BadRequestException('User not found');
    }
    const isMatch: boolean = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
      throw new BadRequestException('Password does not match');
    }
    return user;
  }
  async login(user: any): Promise<any> {
    const payload = { user: user.username, id: user.id };
    return { access_token: this.jwtService.sign(payload) };
  }

  // async login(user: any) {
  //   const payload = { username: user.username, sub: user.userId };
  //   return {
  //     access_token: this.jwtService.sign(payload),
  //   };
  // }
}
