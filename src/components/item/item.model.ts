import { Document, Model, model, Schema } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import { hotelSchema, IHotelDocument } from './hotel/hotel.model';
import { IPlaceDocument, placeSchema } from './place/place.model';
import { ITransferDocument, transferSchema } from './transfer/transfer.model';

export enum ItemTypeEnum {
    HOTEL = 'hotel',
    PLACE = 'place',
    TRANSFER = 'transfer',
}

/**
 * --------------------------------
 * Interface for Item Model
 * --------------------------------
 */
export interface IItemDocument {
    type: ItemTypeEnum;
    hotel: IHotelDocument;
    place: IPlaceDocument;
    transfer: ITransferDocument;
    isArchived: boolean;
}

export interface IItem extends IItemDocument, Document {}

export interface IItemModel extends Model<IItem> {
    paginate(query, option: { limit?: number; page?: number }): any;
}

/**
 * Item Schema for store in DB
 */
export const itemSchema: Schema<IItemDocument> = new Schema(
    {
        type: {
            type: Schema.Types.String,
            enum: ItemTypeEnum,
            trim: true,
        },
        hotel: hotelSchema,
        place: placeSchema,
        transfer: transferSchema,
        isArchived: { type: Schema.Types.Boolean, default: false },
    },
    {
        timestamps: true,
    },
);

itemSchema.plugin(mongoosePaginate);
itemSchema.index({ type: 1 });
export const Item: IItemModel = model<IItem, IItemModel>('items', itemSchema);
export default Item;
