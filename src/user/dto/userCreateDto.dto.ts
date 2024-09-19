import { IsBoolean, IsEmail, IsMobilePhone, IsString, IsStrongPassword } from "class-validator";

export class UserCreateDto{

    @IsString()
    name:string;

    @IsEmail()
    email:string

    @IsString() 
    password:string

    
    @IsString() 
    phone:string

    @IsBoolean()
    isActive : boolean

}