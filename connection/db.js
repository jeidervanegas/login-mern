import mongoose from "mongoose";

const URLMONGO = 'mongodb+srv://root:root@login.hkqlcgy.mongodb.net/login-artista-latino';

export const connectDB = async() => {
    try {
        const db = await mongoose.connect(URLMONGO);
        console.log(`¡CONNECTED TO THE DATABASE! ${db.connection.name}`);
    } catch (error) {
        console.log(`COULD NOT CONNECT TO THE DATABASE ${error.message}`);
    }
}