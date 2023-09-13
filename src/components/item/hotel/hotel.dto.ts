import { Transform } from 'class-transformer';
import {
    Allow,
    IsNotEmpty,
    IsNumber,
    IsPhoneNumber,
    IsString
} from 'class-validator';
import { titleCase } from '../../../shared/transformers/common.transformer';

export class AddHotelBodyDTO {
    @Transform(titleCase)
    @IsString()
    @IsNotEmpty({
        message: 'Please enter hotel Name.',
    })
    name: string;

    @IsString()
    @IsPhoneNumber()
    @IsNotEmpty({
        message: 'Please enter contact number of hotel.',
    })
    contactNumber: string;

    @IsString()
    @IsNotEmpty({
        message: 'Please enter address of hotel.',
    })
    address: string;

    @IsString()
    @IsNotEmpty({
        message: 'Please enter city.',
    })
    city: string;

    @IsString()
    @IsNotEmpty({
        message: 'Please enter state.',
    })
    state: string;

    @IsNumber()
    @IsNotEmpty({
        message: 'Please enter valid pin code.',
    })
    pinCode: number;

    @Allow()
    latitude: number;

    @Allow()
    longitude: number;

    @IsNumber()
    @IsNotEmpty({
        message: 'Please enter total amount of cost per night.',
    })
    costPerNightFor2Adults: number;

    @Allow()
    knowMore: string;
}
