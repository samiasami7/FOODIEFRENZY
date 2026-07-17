import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

let mongoServer;

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB Connected to MongoDB Atlas");
        return;
    } catch (error) {
        console.warn("Primary DB connection failed, trying local fallback:", error.message);
    }

    try {
        mongoServer = await MongoMemoryServer.create();
        const uri = mongoServer.getUri();
        await mongoose.connect(uri);
        console.log("DB Connected to in-memory MongoDB");
    } catch (fallbackError) {
        console.error("Fallback DB connection failed:", fallbackError.message);
        throw fallbackError;
    }
};