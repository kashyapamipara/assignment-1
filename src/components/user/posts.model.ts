import { Document, Model, model, Schema } from 'mongoose';

/**
 * -----------------------------
 * Interface for user Model
 * -----------------------------
 */

export interface IPostDocument extends Document {
    created_at: string;
    text: string;
    user_id: string;
    image_url: string;
}

export interface IPost extends IPostDocument {
}

/**
 * user's statics methods
 */
export interface IPostModel extends Model<IPost> {
  
}

/**
 * --------------------------------
 * user Schema for store in DB
 * --------------------------------
 */

export const postSchema: Schema<IPostDocument> = new Schema(
    {
        created_at: Schema.Types.String,
        image_url: Schema.Types.String,
        text: Schema.Types.String,
        user_id: Schema.Types.String,
    },
    {
        timestamps: true,
    },
);


export const Posts: IPostModel = model<IPost, IPostModel>('posts', postSchema);

export default Posts;