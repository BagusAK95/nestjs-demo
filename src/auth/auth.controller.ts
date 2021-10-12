import { Controller, Get, Request, Post, UseGuards, Body } from '@nestjs/common';
import { JwtGuard } from './auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService
    ) {}

  @Post('signin')
  async signin(@Body() body: any) {
    const { email, password } = body
    return this.authService.signin(email, password);
  } 

  @Get('profile')
  @UseGuards(JwtGuard)
  profile(@Request() req: any) {
    return req.user;
  }
}