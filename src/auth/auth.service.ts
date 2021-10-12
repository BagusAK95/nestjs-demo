import { ForbiddenException, HttpException, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from '../user/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async signin(email: string, password: string): Promise<any> {
    try {
      const user = await this.userService.findByEmail(email);
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        throw new ForbiddenException('Invalid Password')
      }
  
      return this.jwtSign(user)  
    } catch (error) {
      throw new HttpException(error.message, error.status)
    } 
  }

  async jwtSign(user: User) {
    const payload = {  id: user.id };
    
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}