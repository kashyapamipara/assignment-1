import { Transform } from 'class-transformer';
import { Allow, IsEmail, IsNotEmpty, IsString } from 'class-validator';
import {
  lowerCase,
  titleCase
} from '../../shared/transformers/common.transformer';

export class AddUserBodyDTO {
    @Transform(titleCase)
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @Transform(lowerCase)
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    readonly password: string;

    @Allow()
    readonly contactNumber: string;
}

export class UserLoginBodyDTO {
    @Transform(lowerCase)
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    readonly password: string;
}
