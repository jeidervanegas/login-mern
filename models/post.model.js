import { Schema, model, Types } from "mongoose";

const PostSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    url:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,

    },
    userId:{
        type: Types.ObjectId,
        ref: 'user',
    },
});

export const PostModel = model('post', PostSchema, 'posts');