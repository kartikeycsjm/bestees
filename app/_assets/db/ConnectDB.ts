import mongoose from "mongoose";

export const ConnectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI!)
        console.log('Database Connected successfully');
    } catch (error) {
        console.log('Database not connected');
    }
}