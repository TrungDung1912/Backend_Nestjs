import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto, RegisterUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User as UserM, UserDocument } from './schemas/user.schema';
import mongoose, { Model } from 'mongoose';
import { genSaltSync, hashSync, compareSync } from 'bcryptjs'
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { IUser } from './users.interface';
import { User } from 'src/decorator/customize';
import aqp from 'api-query-params';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UserM.name)
    private userModel: SoftDeleteModel<UserDocument>
  ) { }

  getHashPassword = (plain_pass: string) => {
    const salt = genSaltSync(10);
    var hash = hashSync(plain_pass, salt);
    return hash;
  }

  async create(createUserDTO: CreateUserDto, @User() user: IUser) {
    let { name, email, password, age, gender, address, role, company } = createUserDTO
    const isExist = await this.userModel.findOne({ email })
    if (isExist) {
      throw new BadRequestException(`${email} is exist on the system. Try other emails!`);
    }
    const hashPassword = this.getHashPassword(password)
    let newUser = await this.userModel.create({
      name,
      email,
      password: hashPassword,
      age,
      gender,
      address,
      role,
      company,
      createdBy: {
        _id: user._id,
        email: user.email
      }
    })
    return newUser;

  }

  async findAll(currentPage: number, limit: number, qs: string) {
    const { filter, sort, population } = aqp(qs);
    delete filter.current
    delete filter.pageSize

    let offset = (+currentPage - 1) * (+limit);
    let defaultLimit = +limit ? +limit : 10;
    const totalItems = (await this.userModel.find(filter)).length;
    const totalPages = Math.ceil(totalItems / defaultLimit);

    const result = await this.userModel.find(filter)
      .skip(offset)
      .limit(defaultLimit)
      // @ts-ignore: Unreachable code error
      .sort(sort)
      .select("-password")
      .populate(population)
      .exec();
    return {
      meta: {
        current: currentPage, //trang hiện tại
        pageSize: limit, //số lượng bản ghi đã lấy
        pages: totalPages, //tổng số trang với điều kiện query
        total: totalItems // tổng số phần tử (số bản ghi)
      },
      result //kết quả query
    }
  }

  findOne(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return 'Not found user'
    }
    return this.userModel.findOne({
      _id: id
    }).select("-password");
  }

  findOneByUsername(username: string) {

    return this.userModel.findOne({
      email: username
    });
  }

  isValidUserPassword(password: string, hashPassword: string) {
    return compareSync(password, hashPassword); // false

  }

  async update(updateUserDto: UpdateUserDto, @User() user: IUser) {
    let updateUser = await this.userModel.updateOne(
      { _id: updateUserDto._id },
      {
        ...updateUserDto,
        updatedBy: {
          _id: user._id,
          email: user.email
        }
      }
    );
    return updateUser
  }

  async remove(id: string, @User() user: IUser) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return 'Not found user'
    }
    await this.userModel.updateOne(
      { _id: id },
      {
        deletedBy: {
          _id: user._id,
          email: user.email
        },
        isDeleted: true
      }
    )
    return this.userModel.softDelete({
      _id: id
    });;
  }

  async register(user: RegisterUserDto) {
    let { name, email, password, age, gender, address } = user
    const isExist = await this.userModel.findOne({ email })
    if (isExist) {
      throw new BadRequestException(`${email} is exist on the system. Try other emails!`);
    }
    const hashPassword = this.getHashPassword(password)
    let newRegister = await this.userModel.create({
      name,
      email,
      password: hashPassword,
      age,
      gender,
      address,
      role: "USER"
    })
    return newRegister
  }

  updateUserToken = async (refreshToken: string, _id: string) => {
    return await this.userModel.updateOne(
      { _id },
      { refreshToken }
    )
  }

  findUserByToken = async (refreshToken: string) => {
    return await this.userModel.findOne(
      { refreshToken }
    )
  }
}
