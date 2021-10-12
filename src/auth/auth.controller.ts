import { Controller, Get, Req, Post, UseGuards, Body, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { JwtGuard } from './auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signin')
  async signin(@Body() body: any) {
    const { email, password } = body
    return this.authService.signin(email, password);
  }

  @Get('profile')
  @UseGuards(JwtGuard)
  profile(@Req() req: any) {
    return req.user;
  }
}