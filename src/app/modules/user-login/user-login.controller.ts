import {
  BadRequestException,
  Body,
  Controller,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UserLoginService } from './user-login.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth1')
export class UserLoginController {
  constructor(private userLoginService: UserLoginService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req: any): Promise<any> {
    return this.userLoginService.login(req.user);
  }
}
