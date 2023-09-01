import {
    IsEmail,
    IsNotEmpty,
    ValidateNested,
    IsDefined,
    IsNotEmptyObject,
    IsObject,
    IsArray,
    IsString,
    IsDate,
    IsBoolean,
    IsMongoId,
} from 'class-validator';
import { Transform, Type } from 'class-transformer';
import mongoose from 'mongoose';

export class CreateResumeDto {
    @IsNotEmpty({ message: 'Email khong duoc de trong' })
    email: string;

    @IsNotEmpty({ message: 'UserId khong duoc de trong' })
    userId: mongoose.Schema.Types.ObjectId;

    @IsNotEmpty({ message: 'URL khong duoc de trong' })
    url: string;

    @IsNotEmpty({ message: 'Status khong duoc de trong' })
    status: string;

    @IsNotEmpty({ message: 'CompanyId khong duoc de trong' })
    companyId: mongoose.Schema.Types.ObjectId;

    @IsNotEmpty({ message: 'JobId khong duoc de trong' })
    jobId: mongoose.Schema.Types.ObjectId;
}

export class CreateUserCVDto {
    @IsNotEmpty({ message: 'URL khong duoc de trong' })
    url: string;

    @IsNotEmpty({ message: 'CompanyId khong duoc de trong' })
    @IsMongoId({ message: 'CompanyId la mongo Id' })
    companyId: mongoose.Schema.Types.ObjectId;

    @IsNotEmpty({ message: 'JobId khong duoc de trong' })
    @IsMongoId({ message: 'JobId la mongo Id' })
    jobId: mongoose.Schema.Types.ObjectId;
}
