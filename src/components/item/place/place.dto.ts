import { Transform } from 'class-transformer';
import {
    Allow,
    IsNotEmpty,
    IsNumber,
    IsPhoneNumber,
    IsString
} from 'class-validator';
import { IsMongoIdObject } from '../../../shared/customDecorator';
import { titleCase } from '../../../shared/transformers/common.transformer';

export class AddPlaceBodyDTO {
    @Transform(titleCase)
    @IsString()
    @IsNotEmpty({
        message: 'Please enter place name.',
    })
    name: string;

    @IsString()
    @IsPhoneNumber()
    @IsNotEmpty({
        message: 'Please enter contact number of place.',
    })
    contactNumber: string;

    @IsString()
    @IsNotEmpty({
        message: 'Please enter address of place.',
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
        message: 'Please enter total amount of cost of adults.',
    })
    costForAdult: number;

    @Allow()
    costForChild: number;

    @Allow()
    knowMore: string;
}

export class PlaceReqParamDTO {
    @IsMongoIdObject({
        message: 'hotelId is not valid ',
    })
    placeId: string;
}
