// //

// import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { JwtAuthGuard } from './auth.guard';

// @Controller('auth')
// export class AuthController {
//   constructor(private readonly authService: AuthService) {}

//   @Post('login')
//   async login(@Body() body) {
//     const user = await this.authService.validateUser(
//       body.username,
//       body.password,
//     );
//     if (!user) {
//       return { message: 'Invalid credentials' };
//     }
//     return this.authService.login(user);
//   }

//   @UseGuards(JwtAuthGuard)
//   @Post('protected')
//   getProtected(@Request() req) {
//     return req.user;
//   }
// }

import {
  Controller,
  Post,
  Body,
  UseGuards,
  Request,
  Headers,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth-guard';
import { LocalAuthGuard } from './local-auth-guard';
import { Public } from './public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @Post('login')
  // async login(@Body() body) {
  //   const user = await this.authService.validateUser(
  //     body.username,
  //     body.password,
  //   );
  //   if (!user) {
  //     return { message: 'Invalid credentials' };
  //   }
  //   return this.authService.login(user);
  // }

  // @UseGuards(JwtAuthGuard)
  // @Post('protected')
  // getProtected(@Request() req) {
  //   return req.user;
  // }
  // @Post('login')
  // async login(@Request() req) {
  //   return this.authService.login(req.user);
  // }
  // @Public()
  // @UseGuards(LocalAuthGuard)
  // @Post('login')
  // async login(@Body() body) {
  //   console.log('start');
  //   const user = await this.authService.validateUser(
  //     body.username,
  //     body.password,
  //   );
  //   if (!user) {
  //     return { message: 'Invalid credentials' };
  //   }
  //   return this.authService.login(user);
  // }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Headers('authorization') authorization: string) {
    if (!authorization || !authorization.startsWith('Basic ')) {
      throw new UnauthorizedException(
        'Missing or invalid authorization header',
      );
    }

    const base64Credentials = authorization.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString(
      'ascii',
    );
    const [username, password] = credentials.split(':');

    if (!username || !password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return this.authService.login(user);
  }
}
