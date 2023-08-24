import { IsNotEmpty } from "class-validator";

export class CreateCompanyDto {
    @IsNotEmpty({ message: 'The name is empty' })
    name: string;

    @IsNotEmpty({ message: 'The address is empty' })
    address: string;

    @IsNotEmpty({ message: 'The description is empty' })
    description: string;
}
