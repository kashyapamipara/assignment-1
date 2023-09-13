import { Schema } from 'mongoose';

/**
 * --------------------------------
 * Interface for transfer Model
 * --------------------------------
 */
export interface ITransferDocument {
    name: string;
    source: string;
    destination: string;
    noOfKilometers: number;
    chargePerKilometers: number;
    knowMore: any;
}

/**
 * -------------------------------------
 * transfer Schema for store in DB
 * -------------------------------------
 */

export const transferSchema: Schema<ITransferDocument> = new Schema(
    {
        name: {
            type: Schema.Types.String,
            required: true,
        },
        source: {
            type: Schema.Types.String,
            required: true,
        },
        destination: {
            type: Schema.Types.String,
            required: true,
        },
        noOfKilometers: {
            type: Schema.Types.Number,
            required: true,
        },
        chargePerKilometers: {
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
