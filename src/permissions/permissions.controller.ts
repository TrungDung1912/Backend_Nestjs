import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { Public, ResponseMessage, User } from 'src/decorator/customize';
import { IUser } from 'src/users/users.interface';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('permissions')
@Controller('permissions')
export class PermissionsController {
  constructor(private readonly permissionsService: PermissionsService) { }

  @Post()
  @ResponseMessage('Create a Permission')
  async create(
    @Body() createPermissionDTO: CreatePermissionDto,
    @User() user: IUser
  ) {
    let newPermission = await this.permissionsService.create(createPermissionDTO, user);
    return {
      _id: newPermission?._id,
      createdAt: newPermission?.createdAt
    };
  }

  @Get()
  @ResponseMessage("Fetch list permission with paginate")
  findAll(
    @Query("current") currentPage: string,
    @Query("pageSize") limit: string,
    @Query() qs: string
  ) {
    return this.permissionsService.findAll(+currentPage, +limit, qs);
  }

  @Public()
  @Get(':id')
  @ResponseMessage('Fetch permission by ID')
  async findOne(@Param('id') id: string) {
    let foundPermission = await this.permissionsService.findOne(id);
    return foundPermission
  }

  @Patch(':id')
  @ResponseMessage('Update a permission')
  async update(
    @Param('id') id: string,
    @Body() updatePermissionDto: UpdatePermissionDto,
    @User() user: IUser
  ) {
    let updatePermission = await this.permissionsService.update(id, updatePermissionDto, user);
    return updatePermission
  }

  @Delete(':id')
  @ResponseMessage('Remove a permission')
  remove(
    @Param('id') id: string,
    @User() user: IUser
  ) {
    return this.permissionsService.remove(id, user);
  }
}
