import { Controller, Get, Req, Post, UseGuards, Body } from '@nestjs/common';
import { JwtGuard } from './jwt.guard';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller({
  path: 'auth',
  version: '1',
})
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signin')
  async signin(@Body() body: LoginDto) {
    const { email, password } = body;
    return this.authService.signin(email, password);
  }

  @Get('profile')
  @UseGuards(JwtGuard)
  profile(@Req() req: any) {
    return req.user;
  }
}
