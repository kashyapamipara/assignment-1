import { Allow, IsEnum, IsNotEmpty } from 'class-validator';
import { IsMongoIdObject } from '../../shared/customDecorator';
import { AddHotelBodyDTO } from './hotel/hotel.dto';
import { ItemTypeEnum } from './item.model';
import { AddPlaceBodyDTO } from './place/place.dto';
import { AddTransferBodyDTO } from './transfer/transfer.dto';

export class AddItemDTO {
    @IsEnum(ItemTypeEnum)
    @IsNotEmpty({
        message: 'Please enter hotel Name.',
    })
    type: string;

    @Allow()
    hotel: AddHotelBodyDTO;

    @Allow()
    place: AddPlaceBodyDTO;

    @Allow()
    transfer: AddTransferBodyDTO;
}

export class ItemReqParamDTO {
    @IsMongoIdObject({
        message: 'Item is not valid ',
    })
    itemId: string;
}
