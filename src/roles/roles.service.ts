import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { IUser } from 'src/users/users.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Role, RoleDocument } from './schemas/role.schema';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import aqp from 'api-query-params';
import mongoose from 'mongoose';

@Injectable()
export class RolesService {
  constructor(
    @InjectModel(Role.name)
    private roleModal: SoftDeleteModel<RoleDocument>
  ) { }

  async create(createRoleDto: CreateRoleDto, user: IUser) {
    let { name, description, isActive, permissions } = createRoleDto
    const isExist = await this.roleModal.findOne({ name })
    if (isExist) {
      throw new BadRequestException(`Role with name ${name} already exists!`)
    }
    let newRole = await this.roleModal.create({
      name, description, isActive, permissions,
      createdBy: {
        _id: user._id,
        email: user.email
      }
    })
    return newRole
  }

  async findAll(currentPage: number, limit: number, qs: string) {
    const { filter, sort, population } = aqp(qs);
    delete filter.current
    delete filter.pageSize

    let offset = (+currentPage - 1) * (+limit);
    let defaultLimit = +limit ? +limit : 10;
    const totalItems = (await this.roleModal.find(filter)).length;
    const totalPages = Math.ceil(totalItems / defaultLimit);

    const result = await this.roleModal.find(filter)
      .skip(offset)
      .limit(defaultLimit)
      // @ts-ignore: Unreachable code error
      .sort(sort)
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

  async findOne(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new BadRequestException(`Not Found Role`);
    }
    return (await this.roleModal.findById(id))
      .populate({ path: 'permissions', select: { _id: 1, apiPath: 1, name: 1, method: 1, module: 1 } })
  }

  async update(id: string, updateRoleDto: UpdateRoleDto, user: IUser) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new BadRequestException(`Not Found Role`);
    }

    const updateRole = await this.roleModal.updateOne(
      { _id: id },
      {
        ...updateRoleDto,
        updatedBy: {
          _id: user._id,
          email: user.email
        }
      }
    )
    return updateRole
  }

  async remove(_id: string, user: IUser) {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      throw new BadRequestException(`Not Found Role`);
    }
    const foundRole = await this.roleModal.findById(_id)
    if (foundRole.name === 'ADMIN') {
      throw new BadRequestException(`Can not remove ADMIN role`)
    }
    await this.roleModal.updateOne(
      { _id },
      {
        deletedBy: {
          _id: user._id,
          email: user.email
        },
        isDeleted: true
      }
    )
    return this.roleModal.softDelete({ _id })
  }
}
