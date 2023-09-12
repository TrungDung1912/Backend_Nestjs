import {
    IsEmail,
    IsNotEmpty,
    ValidateNested,
    IsDefined,
    IsNotEmptyObject,
    IsObject,
    IsMongoId,
    IsString,
} from 'class-validator';
import { Type } from 'class-transformer';
import mongoose from 'mongoose';
import { ApiProperty } from '@nestjs/swagger'

class Company {
    @IsNotEmpty()
    _id: mongoose.Schema.Types.ObjectId;

    @IsNotEmpty()
    name: string;
}
export class CreateUserDto {
    @IsNotEmpty({ message: 'Name khong duoc de trong' })
    name: string;

    @IsEmail({}, { message: 'Email khong dung dinh dang' })
    @IsNotEmpty({ message: 'Email khong duoc de trong' })
    email: string;

    @IsNotEmpty({ message: 'Password khong duoc de trong' })
    password: string;

    @IsNotEmpty({ message: 'Age khong duoc de trong' })
    age: number;

    @IsNotEmpty({ message: 'Gender khong duoc de trong' })
    gender: string;

    @IsNotEmpty({ message: 'Address khong duoc de trong' })
    address: string;

    @IsNotEmpty({ message: 'Role khong duoc de trong' })
    @IsMongoId({ message: 'Role is following MongoID form' })
    role: mongoose.Schema.Types.ObjectId;

    @IsDefined()
    @IsNotEmptyObject()
    @IsObject()
    @ValidateNested()
    @Type(() => Company)
    company: Company;
}

export class RegisterUserDto {
    @IsNotEmpty({ message: 'Name khong duoc de trong' })
    name: string;

    @IsEmail({}, { message: 'Email khong dung dinh dang' })
    @IsNotEmpty({ message: 'Email khong duoc de trong' })
    email: string;

    @IsNotEmpty({ message: 'Password khong duoc de trong' })
    password: string;

    @IsNotEmpty({ message: 'Age khong duoc de trong' })
    age: number;

    @IsNotEmpty({ message: 'Gender khong duoc de trong' })
    gender: string;

    @IsNotEmpty({ message: 'Address khong duoc de trong' })
    address: string;
}

export class UserLoginDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'dungbum', description: 'username' })
    readonly username: string;
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        example: '123456',
        description: 'password',
    })
    readonly password: string;
}

