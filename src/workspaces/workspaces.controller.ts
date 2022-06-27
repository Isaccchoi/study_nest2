import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('api/workspaces')
export class WorkspacesController {
  @Get()
  getMyWorkspaces() {}

  @Post()
  createWorkSpace() {}

  @Get(':url/members')
  getAllMembersFromWorkSpace() {}

  @Post(':url/members')
  inviteMembersToWorkSpace() {}

  @Delete(':url/members')
  kikMemberFromWorkSpace() {}

  @Get(':url/members/:id  ')
  getMemberInfoInWorkSpace() {}
}
