import { IsDefined, IsNotEmpty, IsEmail, IsString, MinLength } from "class-validator"

export class RegisterDto {
	@IsDefined() // Проверка на валидность
	@IsNotEmpty()
	@IsEmail()
	email: string

    @IsDefined()
	@IsNotEmpty()
    @IsString()
    @MinLength(6)
	password: string
}
 