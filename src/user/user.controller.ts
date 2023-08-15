import { Controller, Delete, Get } from '@nestjs/common';

@Controller('user') //route definition
export class UserController {
  @Get()
  findAll(): string {
    return 'This action returns all users with Dungbum';
  }

  @Delete("/by-id")
  findById(): string {
    return 'This action will delete a user by id';
  }
}
