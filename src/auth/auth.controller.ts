import { Body, Controller, Post, Res, UseGuards, Req, ParseIntPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dtos/register.dto';
import { Request, Response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser } from 'src/utils/decorators/current-user.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
    async register(@Body() dto: RegisterDto, @Res({passthrough: true}) res: Response) {
      return await this.authService.register(dto, res)
    }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@CurrentUser('id', ParseIntPipe) userId: number, @Res({passthrough: true}) res: Response){

      return await this.authService.generateTokens(userId, res)
    }
}
