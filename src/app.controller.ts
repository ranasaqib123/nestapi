import { Controller, Get, Post, UseGuards,Request } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}
  constructor(private readonly authService: AuthService) {
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    // console.log(req.user)
    return this.authService.login(req.user)
  }

  @UseGuards(JwtAuthGuard)
  @Get('auth/profile')
  profile(@Request() req){
    // console.log(req.user)
    return req.user;
  }

}
