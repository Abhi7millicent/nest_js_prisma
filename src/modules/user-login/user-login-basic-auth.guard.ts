import {
  Injectable,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class BasicAuthGuard extends AuthGuard('basic') {
  canActivate(context: ExecutionContext) {
    console.log('BasicAuthGuard: Checking credentials');
    return super.canActivate(context);
  }

  handleRequest(err: any, user: any, info: any) {
    if (err || !user) {
      console.log('BasicAuthGuard: Unauthorized access', err, info);
      throw err || new UnauthorizedException();
    }
    console.log('BasicAuthGuard: User authenticated', user);
    return user;
  }
}
