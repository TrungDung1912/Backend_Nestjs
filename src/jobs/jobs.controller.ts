import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { CreateJobDto } from './dto/create-job.dto';
import { Public, ResponseMessage, User } from 'src/decorator/customize';
import { IUser } from 'src/users/users.interface';
import { UpdateJobDto } from './dto/update-job.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('job')
@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) { }

  @Post()
  @ResponseMessage('Create a new job')
  async create(
    @Body() createJobDTO: CreateJobDto,
    @User() user: IUser
  ) {
    let newJob = await this.jobsService.create(createJobDTO, user);
    return {
      _id: newJob?._id,
      createdAt: newJob?.createdAt
    };
  }

  @Get()
  @Public()
  @ResponseMessage("Fetch list user with paginate")
  findAll(
    @Query("current") currentPage: string,
    @Query("pageSize") limit: string,
    @Query() qs: string
  ) {
    return this.jobsService.findAll(+currentPage, +limit, qs);
  }

  @Get(':id')
  @Public()
  @ResponseMessage('Fetch job by ID')
  findOne(@Param('id') id: string) {
    let foundUser = this.jobsService.findOne(id);
    return foundUser
  }

  @Patch(':id')
  @ResponseMessage('Update a user')
  async update(
    @Param('id') id: string,
    @Body() updateJobDto: UpdateJobDto,
    @User() user: IUser
  ) {
    let updateJob = await this.jobsService.update(id, updateJobDto, user);
    return updateJob
  }

  @Delete(':id')
  @ResponseMessage('Delete a job')
  remove(
    @Param('id') id: string,
    @User() user: IUser
  ) {
    let deletedJob = this.jobsService.remove(id, user);
    return deletedJob
  }
}
