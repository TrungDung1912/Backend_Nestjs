import { Controller, Get, Render, Post, UseGuards, Body, Res, Req } from '@nestjs/common';
import { Public, ResponseMessage, User } from 'src/decorator/customize';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';
import { RegisterUserDto } from 'src/users/dto/create-user.dto';
import { Request, Response } from 'express';
import { IUser } from 'src/users/users.interface';


@Controller("auth")
export class AuthController {
    constructor(
        private authService: AuthService
    ) { }

    @Public()
    @UseGuards(LocalAuthGuard)
    @Post('/login')
    @ResponseMessage('User Login')
    handleLogin(
        @Req() req,
        @Res({ passthrough: true }) response: Response
    ) {
        return this.authService.login(req.user, response)
    }

    @Public()
    @ResponseMessage("Register a new user")
    @Post('/register')
    handleRegister(@Body() registerUserDto: RegisterUserDto) {
        return this.authService.register(registerUserDto)
    }

    @ResponseMessage("Get user information")
    @Get('/account')
    getAccountF5(@User() user: IUser) {
        return { user }
    }

    @Public()
    @ResponseMessage("Get user by refresh token")
    @Get('/refresh')
    handleRefresh(
        @Req() request: Request,
        @Res({ passthrough: true }) response: Response
    ) {
        const refreshToken = request.cookies['refresh_token']
        return this.authService.processNewToken(refreshToken, response)
    }

    @UseGuards(JwtAuthGuard)
    @Get('/profile')
    getProfile(@Req() req) {
        return req.user;
    }

}
