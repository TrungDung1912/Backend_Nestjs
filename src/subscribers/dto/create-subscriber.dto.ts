import { IsArray, IsNotEmpty, IsString } from "class-validator";

export class CreateSubscriberDto {
    @IsNotEmpty({ message: 'Name khong duoc de trong' })
    email: string;

    @IsNotEmpty({ message: 'Name khong duoc de trong' })
    name: string;

    @IsNotEmpty({ message: 'Skill khong duoc de trong' })
    @IsArray({ message: 'Skill co dinh dang la array' })
    @IsString({ each: true, message: 'Skill co dinh dang la string' })
    skills: string[];

}
