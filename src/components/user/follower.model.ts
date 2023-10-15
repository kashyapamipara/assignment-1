import { Document, Model, model, Schema } from 'mongoose';

/**
 * -----------------------------
 * Interface for user Model
 * -----------------------------
 */

export interface IFollowerDocument extends Document {
    follower_id: string;
    user_id: string;
}

export interface IFollower extends IFollowerDocument {}

/**
 * user's statics methods
 */
export interface IFollowerModel extends Model<IFollower> {}

/**
 * --------------------------------
 * user Schema for store in DB
 * --------------------------------
 */

export const postSchema: Schema<IFollowerDocument> = new Schema(
    {
        follower_id: Schema.Types.String,

        user_id: Schema.Types.String,
    },
    {
        timestamps: true,
    },
);

export const Followers: IFollowerModel = model<IFollower, IFollowerModel>('followers', postSchema);

export default Followers;
