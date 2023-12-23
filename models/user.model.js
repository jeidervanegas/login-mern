import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    names:{
        type: String,
        required: true,

    },
    surnames:{
        type: String,
        required: true,

    },
    password:{
        type: String,
        required: true,

    },
    email:{
        type: String,
        required: true,
        unique: true,

    },
    nick:{
        type: String,
        required: true,

    },

});

export const UserModel = model('user', UserSchema, 'users');