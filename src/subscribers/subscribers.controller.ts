import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SubscribersService } from './subscribers.service';
import { CreateSubscriberDto } from './dto/create-subscriber.dto';
import { UpdateSubscriberDto } from './dto/update-subscriber.dto';
import { Public, ResponseMessage, SkipCheckPermission, User } from 'src/decorator/customize';
import { IUser } from 'src/users/users.interface';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('subscribers')
@Controller('subscribers')
export class SubscribersController {
  constructor(private readonly subscribersService: SubscribersService) { }

  @Post()
  @ResponseMessage('Create a new subscriber')
  async create(
    @Body() createSubscriberDto: CreateSubscriberDto,
    @User() user: IUser
  ) {
    let newJob = await this.subscribersService.create(createSubscriberDto, user);
    return {
      _id: newJob?._id,
      createdBy: newJob?.createdBy
    };
  }

  @Post('skills')
  @ResponseMessage('Get a subscriber skills')
  @SkipCheckPermission()
  getUserSkills(@User() user: IUser) {
    return this.subscribersService.getSkills(user)
  }

  @Get()
  @Public()
  @ResponseMessage("Fetch list subscriber with paginate")
  findAll(
    @Query("current") currentPage: string,
    @Query("pageSize") limit: string,
    @Query() qs: string
  ) {
    return this.subscribersService.findAll(+currentPage, +limit, qs);
  }

  @Get(':id')
  @Public()
  @ResponseMessage('Fetch subscriber by ID')
  findOne(@Param('id') id: string) {
    let foundSubscriber = this.subscribersService.findOne(id);
    return foundSubscriber
  }

  @Patch()
  @SkipCheckPermission()
  @ResponseMessage('Update a user')
  async update(
    @Body() updateSubscriberDto: UpdateSubscriberDto,
    @User() user: IUser
  ) {
    let updateSubscriber = await this.subscribersService.update(updateSubscriberDto, user);
    return updateSubscriber
  }

  @Delete(':id')
  @ResponseMessage('Delete a subscriber')
  remove(
    @Param('id') id: string,
    @User() user: IUser
  ) {
    let deletedSubscriber = this.subscribersService.remove(id, user);
    return deletedSubscriber
  }
}
