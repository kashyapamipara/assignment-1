import { Schema } from 'mongoose';

/**
 * --------------------------------
 * Interface for hotel Model
 * --------------------------------
 */
export interface IHotelDocument {
    name: string;
    contactNumber: string;
    address: string;
    city: string;
    state: string;
    pinCode: number;
    longitude: number;
    latitude: number;
    costPerNightFor2Adults: number;
    knowMore: any;
}

/**
 * hotel Schema for store in DB
 */
export const hotelSchema: Schema<IHotelDocument> = new Schema(
    {
        name: {
            type: Schema.Types.String,
            required: true,
        },
        contactNumber: {
            type: Schema.Types.String,
            required: true,
        },
        address: {
            type: Schema.Types.String,
            required: true,
        },
        city: {
            type: Schema.Types.String,
            required: true,
        },
        state: {
            type: Schema.Types.String,
            required: true,
        },
        pinCode: {
            type: Schema.Types.Number,
            required: true,
        },
        longitude: {
            type: Schema.Types.Number,
        },
        latitude: {
            type: Schema.Types.Number,
        },
        costPerNightFor2Adults: {
            type: Schema.Types.Number,
            required: true,
        },
        knowMore: {
            type: Schema.Types.Mixed,
        },
    },
    {
        _id: false,
    },
);
