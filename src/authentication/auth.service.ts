import { ForbiddenException, HttpException, Injectable } from '@nestjs/common';
import { UserService } from '../models/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from '../models/user/user.entity';
import { IToken } from './interfaces/token.interface';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signin(email: string, password: string): Promise<IToken> {
    try {
      const user = await this.userService.findByEmail(email);
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        throw new ForbiddenException('Invalid Password');
      }

      const accessToken = await this.jwtSign(user);
      return { accessToken };
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async jwtSign(user: User) {
    const payload = { id: user.id };

    return this.jwtService.sign(payload);
  }
}
