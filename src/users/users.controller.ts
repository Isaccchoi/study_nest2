import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request } from 'express';
import { JoinRequestDto } from './dto/join.request.dto';

@Controller('api/users')
export class UsersController {
  constructor(private usersService) {}

  @Get()
  getUsers(@Req() req) {
    return req.user;
  }

  @Post()
  PostUsers(@Body() data: JoinRequestDto) {
    this.usersService.postUser(data.email, data.nickname, data.password);
  }

  @Post('login')
  login(@Req() req) {
    return req.user;
  }

  @Post('logout')
  Logout(@Req() req: Request, @Res() res: Response) {
    // req.logOut();
    // res.clearCookie('connect.sid', { httpOnly: true });
    // res.send('pk');
  }
}
