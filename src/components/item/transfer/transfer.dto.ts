import { Transform } from 'class-transformer';
import { Allow, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { titleCase } from '../../../shared/transformers/common.transformer';

export class AddTransferBodyDTO {
    @Transform(titleCase)
    @IsString()
    @IsNotEmpty({
        message: 'Please enter route for transfer',
    })
    name: string;

    @IsString()
    @IsNotEmpty({
        message: 'Please enter valid source place',
    })
    source: string;

    @IsString()
    @IsNotEmpty({
        message: 'Please enter valid destination place',
    })
    destination: string;

    @IsNumber()
    @IsNotEmpty({
        message: 'Please enter total number of kilometers',
    })
    noOfKilometers: number;

    @IsNumber()
    @IsNotEmpty({
        message: 'Please enter charge per kilometer',
    })
    chargePerKilometers: number;

    @Allow()
    knowMore: any;
}
