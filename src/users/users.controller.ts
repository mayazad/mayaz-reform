import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post('register')
    async register(@Body() body: any) {
        return this.usersService.createUser(body);
    }

    @Get(':id/profile')
    async getProfile(@Param('id') id: string) {
        return this.usersService.getUserProfile(id);
    }
}
