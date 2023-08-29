import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Public, ResponseMessage, User } from 'src/decorator/customize';
import { IUser } from './users.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  @ResponseMessage('Create a new user')
  async create(
    @Body() createUserDTO: CreateUserDto,
    @User() user: IUser
  ) {
    let newUser = await this.usersService.create(createUserDTO, user);
    return {
      _id: newUser?._id,
      createdAt: newUser?.createdAt
    };
  }

  @Get()
  @ResponseMessage("Fetch list user with paginate")
  findAll(
    @Query("page") currentPage: string,
    @Query("limit") limit: string,
    @Query() qs: string
  ) {
    return this.usersService.findAll(+currentPage, +limit, qs);
  }

  @Public()
  @Get(':id')
  @ResponseMessage('Fetch user by ID')
  async findOne(@Param('id') id: string) {
    let foundUser = await this.usersService.findOne(id);
    return foundUser
  }

  @Patch()
  @ResponseMessage('Update a user')
  async update(
    @Body() updateUserDto: UpdateUserDto,
    @User() user: IUser
  ) {
    let updateUser = await this.usersService.update(updateUserDto, user);
    return updateUser
  }

  @Delete(':id')
  @ResponseMessage('Delete a user')
  remove(
    @Param('id') id: string,
    @User() user: IUser
  ) {
    let deletedUser = this.usersService.remove(id, user);
    return deletedUser;
  }
}
