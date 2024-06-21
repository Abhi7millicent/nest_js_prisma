import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service'; // Adjust the path according to your project structure

@Injectable()
export class LocalAuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { headers } = request;
    const authorization = headers['authorization'];

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

    request.user = user;
    return true;
  }
}
