import { Schema } from 'mongoose';

/**
 * -----------------------------
 * Interface for place Model
 * -----------------------------
 */

export interface IPlaceDocument {
    name: string;
    contactNumber: string;
    address: string;
    city: string;
    state: string;
    pinCode: number;
    longitude: number;
    latitude: number;
    costForAdult: number;
    costForChild: number;
    knowMore: any;
}

/**
 * ------------------------------------
 * place Schema for store in DB
 * ------------------------------------
 */

export const placeSchema: Schema<IPlaceDocument> = new Schema(
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
        costForAdult: {
            type: Schema.Types.Number,
            required: true,
        },
        costForChild: {
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
