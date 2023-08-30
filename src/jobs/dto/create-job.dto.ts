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
} from 'class-validator';
import { Transform, Type } from 'class-transformer';
import mongoose from 'mongoose';

class Company {
    @IsNotEmpty()
    _id: mongoose.Schema.Types.ObjectId;

    @IsNotEmpty()
    name: string;
}
export class CreateJobDto {
    @IsNotEmpty({ message: 'Name khong duoc de trong' })
    name: string;

    @IsNotEmpty({ message: 'Skill khong duoc de trong' })
    @IsArray({ message: 'Skill co dinh dang la array' })
    @IsString({ each: true, message: 'Skill co dinh dang la string' })
    skills: string[];

    @IsDefined()
    @IsNotEmptyObject()
    @IsObject()
    @ValidateNested()
    @Type(() => Company)
    company: Company;

    @IsNotEmpty({ message: 'Location khong duoc de trong' })
    location: string;

    @IsNotEmpty({ message: 'Salary khong duoc de trong' })
    salary: number;

    @IsNotEmpty({ message: 'Quantity khong duoc de trong' })
    quantity: number;

    @IsNotEmpty({ message: 'Level khong duoc de trong' })
    level: string;

    @IsNotEmpty({ message: 'Description khong duoc de trong' })
    description: string;

    @IsNotEmpty({ message: 'startDate khong duoc de trong' })
    @Transform(({ value }) => new Date(value))
    @IsDate({ message: 'startDate co dinh dang la Date' })
    startDate: Date;

    @IsNotEmpty({ message: 'endDate khong duoc de trong' })
    @Transform(({ value }) => new Date(value))
    @IsDate({ message: 'endDate co dinh dang la Date' })
    endDate: Date;

    @IsNotEmpty({ message: 'isActive khong duoc de trong' })
    @IsBoolean({ message: 'isActive co dinh dang boolean' })
    isActive: Date;
}
