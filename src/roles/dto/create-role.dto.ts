import { IsArray, IsBoolean, IsMongoId, IsNotEmpty } from "class-validator";
import mongoose from "mongoose";

export class CreateRoleDto {
    @IsNotEmpty({ message: 'Name khong duoc de trong' })
    name: string;

    @IsNotEmpty({ message: 'Description khong duoc de trong' })
    description: string;

    @IsNotEmpty({ message: 'IsActive khong duoc de trong' })
    @IsBoolean({ message: 'IsActive co gia tri boolean' })
    isActive: boolean;

    @IsNotEmpty({ message: 'Permission khong duoc de trong' })
    @IsMongoId({ each: true, message: 'Permission form is mongo object id' })
    @IsArray({ message: 'Permission form is an array' })
    permissions: mongoose.Schema.Types.ObjectId[];


}
