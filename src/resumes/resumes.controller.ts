import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ResumesService } from './resumes.service';
import { CreateResumeDto, CreateUserCVDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';
import { Public, ResponseMessage, User } from 'src/decorator/customize';
import { IUser } from 'src/users/users.interface';

@Controller('resumes')
export class ResumesController {
  constructor(private readonly resumesService: ResumesService) { }

  @Post()
  @ResponseMessage('Create a new job')
  async create(
    @Body() createUserCVDTO: CreateUserCVDto,
    @User() user: IUser
  ) {
    let newResume = await this.resumesService.create(createUserCVDTO, user);
    return {
      _id: newResume?._id,
      createdAt: newResume?.createdAt
    };
  }

  @Post('by-user')
  @ResponseMessage('Get CV by user')
  getResumeByUser(
    @User() user: IUser
  ) {
    return this.resumesService.findByUsers(user)
  }

  @Get()
  @Public()
  @ResponseMessage("Fetch list resumes with paginate")
  findAll(
    @Query("current") currentPage: string,
    @Query("pageSize") limit: string,
    @Query() qs: string
  ) {
    return this.resumesService.findAll(+currentPage, +limit, qs);
  }

  @Get(':id')
  @Public()
  @ResponseMessage('Fetch resume by ID')
  findOne(@Param('id') id: string) {
    let foundResume = this.resumesService.findOne(id);
    return foundResume
  }

  @Patch(':id')
  @ResponseMessage('Update status resume')
  async update(
    @Param('id') id: string,
    @Body('status') status: string,
    @User() user: IUser
  ) {
    let updateJob = await this.resumesService.update(id, status, user);
    return updateJob
  }

  @Delete(':id')
  @ResponseMessage('Delete a resume')
  remove(
    @Param('id') id: string,
    @User() user: IUser
  ) {
    let deletedResume = this.resumesService.remove(id, user);
    return deletedResume
  }
}
