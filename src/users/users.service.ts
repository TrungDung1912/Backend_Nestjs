import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import mongoose, { Model } from 'mongoose';
import { genSaltSync, hashSync, compareSync } from 'bcryptjs'

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  getHashPassword = (plain_pass: string) => {
    const salt = genSaltSync(10);
    var hash = hashSync(plain_pass, salt);
    return hash;
  }

  async create(createUserDto: CreateUserDto) {
    const hashPassword = this.getHashPassword(createUserDto.password)
    let user = await this.userModel.create({
      email: createUserDto.email,
      password: hashPassword,
      name: createUserDto.name
    })
    return user;

  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return 'Not found user'
    }
    return this.userModel.findOne({
      _id: id
    });
  }

  findOneByUsername(username: string) {

    return this.userModel.findOne({
      email: username
    });
  }

  isValidUserPassword(password: string, hashPassword: string) {
    return compareSync(password, hashPassword); // false

  }

  async update(updateUserDto: UpdateUserDto) {
    console.log(updateUserDto._id);
    return await this.userModel.updateOne({ _id: updateUserDto._id }, { ...updateUserDto });
  }

  remove(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return 'Not found user'
    }
    return this.userModel.deleteOne({
      _id: id
    });;
  }
}
