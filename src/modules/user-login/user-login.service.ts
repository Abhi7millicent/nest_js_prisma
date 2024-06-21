import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import UserLoginRepository from './user-login.repository';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserLoginService {
  constructor(
    private readonly userLoginRepository: UserLoginRepository,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await UserLoginRepository.findOne({ username: username });
    if (!user) {
      throw new BadRequestException('User not found');
    }
    console.log('user.password:', user.password);
    console.log('password:', password);
    const isMatch: boolean = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
      throw new BadRequestException('Password does not match');
    }
    return user;
  }

  async findUserName(username: string): Promise<any> {
    console.log('object1');
    return UserLoginRepository.findOne({ username: username });
  }
  async login(user: any): Promise<any> {
    const payload = { email: user.email, id: user.id };
    return { access_token: this.jwtService.sign(payload) };
  }

  //   async register(user: RegisterRequestDto): Promise<AccessToken> {
  //     const existingUser = this.usersService.findOneByEmail(user.email);
  //     if (existingUser) {
  //       throw new BadRequestException('email already exists');
  //     }
  //     const hashedPassword = await bcrypt.hash(user.password, 10);
  //     const newUser: User = { ...user, password: hashedPassword };
  //     await this.usersService.create(newUser);
  //     return this.login(newUser);
  //   }
  // Additional methods for user creation and other operations can be added here
}
