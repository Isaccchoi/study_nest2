import { Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('api/workspaces/:url/channels')
export class ChannelsController {
  @Get()
  getChannels() {}
  @Post()
  createChannel() {}

  @Get(':name')
  getChannel() {}

  @Get(':name/chats')
  getChat(@Param('id') id, @Query('parPage') perPage, @Query('page') page) {
    console.log(perPage, page);
  }

  @Post(':name/chats')
  postChat() {}

  @Get(':name/members')
  getAllMembers() {}

  @Post(':name/members')
  inviteMembers() {}
}
