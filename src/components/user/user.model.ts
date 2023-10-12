import { Document, Model, model, Schema } from 'mongoose';
import { getLogger } from '../../services/logger';



const MODULE_NAME_FOR_LOG = 'user.model';
const log = getLogger(MODULE_NAME_FOR_LOG);

/**
 * -----------------------------
 * Interface for user Model
 * -----------------------------
 */

export interface IUserDocument extends Document {
    user_name: string;
    user_id: string;
    email: string;
    image_url: string;
}

export interface IUser extends IUserDocument {
}

/**
 * user's statics methods
 */
export interface IUserModel extends Model<IUser> {
}

/**
 * --------------------------------
 * user Schema for store in DB
 * --------------------------------
 */

export const userSchema: Schema<IUserDocument> = new Schema(
    {
        user_name: Schema.Types.String,
        image_url: Schema.Types.String,
        email: Schema.Types.String,
        user_id: Schema.Types.String,
    },
    {
        timestamps: true,
    },
);


userSchema.index({ email: 1 });
export const Users: IUserModel = model<IUser, IUserModel>('users', userSchema);

export default Users;
