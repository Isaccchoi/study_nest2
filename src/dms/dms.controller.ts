import { Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('api/workspaces/:url/dms')
export class DmsController {
  @Get(':id/chats')
  getChat(@Param('id') id, @Query('parPage') perPage, @Query('page') page) {
    console.log(perPage, page);
  }

  @Post(':id/chats')
  postChat() {}
}
