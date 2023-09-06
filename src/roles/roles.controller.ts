import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { IUser } from 'src/users/users.interface';
import { Public, ResponseMessage, User } from 'src/decorator/customize';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) { }

  @Post()
  async create(
    @Body() createRoleDto: CreateRoleDto,
    @User() user: IUser,
  ) {
    let newRole = await this.rolesService.create(createRoleDto, user)
    return {
      _id: newRole?._id,
      createdAt: newRole?.createdAt
    }
  }

  @Get()
  @ResponseMessage("Fetch role permission with paginate")
  findAll(
    @Query("current") currentPage: string,
    @Query("pageSize") limit: string,
    @Query() qs: string
  ) {
    return this.rolesService.findAll(+currentPage, +limit, qs);
  }

  @Public()
  @Get(':id')
  @ResponseMessage('Fetch permission by ID')
  findOne(@Param('id') id: string) {
    return this.rolesService.findOne(id);
  }

  @Patch(':id')
  @ResponseMessage('Update a permission')
  async update(
    @Param('id') id: string,
    @Body() updateRoleDto: UpdateRoleDto,
    @User() user: IUser
  ) {
    let updatePermission = await this.rolesService.update(id, updateRoleDto, user);
    return updatePermission
  }

  @Delete(':id')
  @ResponseMessage('Remove a permission')
  remove(
    @Param('id') id: string,
    @User() user: IUser
  ) {
    return this.rolesService.remove(id, user);
  }
}
