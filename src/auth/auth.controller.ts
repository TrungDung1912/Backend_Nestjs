import { Controller, Get, Render, Post, UseGuards, Body, Res, Req } from '@nestjs/common';
import { Public, ResponseMessage, User } from 'src/decorator/customize';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';
import { RegisterUserDto, UserLoginDto } from 'src/users/dto/create-user.dto';
import { Request, Response } from 'express';
import { IUser } from 'src/users/users.interface';
import { RolesService } from 'src/roles/roles.service';
import { ThrottlerGuard, Throttle } from '@nestjs/throttler';
import { ApiTags, ApiBody } from '@nestjs/swagger';

@ApiTags('auth')
@Controller("auth")
export class AuthController {
    constructor(
        private authService: AuthService,
        private roleService: RolesService
    ) { }

    @Public()
    @UseGuards(LocalAuthGuard)
    @UseGuards(ThrottlerGuard)
    @Throttle(5, 60)
    @ApiBody({ type: UserLoginDto, })
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
    async getAccountF5(@User() user: IUser) {
        const temp = await this.roleService.findOne(user.role._id) as any
        user.permissions = temp.permissions
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

    @ResponseMessage("Logout an account")
    @Post('/logout')
    Logout(
        @Res({ passthrough: true }) response: Response,
        @User() user: IUser
    ) {
        return this.authService.logout(response, user)
    }

    @UseGuards(JwtAuthGuard)
    @Get('/profile')
    getProfile(@Req() req) {
        return req.user;
    }

}
