import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

let mongoServer;

export const connectDB = async () => {
    const mongooseOptions = {
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 20000,
        retryWrites: true,
        w: "majority",
    };

    const atlasUri = process.env.MONGO_URL;
    const localUri = process.env.MONGO_URL_LOCAL || "mongodb://127.0.0.1:27017/foodiefrenzy";

    if (!atlasUri) {
        console.warn("MONGO_URL is not set. Skipping Atlas connection.");
    }

    try {
        if (atlasUri) {
            await mongoose.connect(atlasUri, mongooseOptions);
            console.log("DB Connected to MongoDB Atlas");
            return { type: "atlas", uri: atlasUri };
        }
    } catch (error) {
        console.error("Atlas connection failed:");
console.error(error);
    }

    try {
        await mongoose.connect(localUri, mongooseOptions);
        console.log("DB Connected to local MongoDB");
        return { type: "local", uri: localUri };
    } catch (localError) {
        console.warn("Local DB connection failed. Starting in-memory MongoDB:", localError.message);
    }

    try {
        mongoServer = await MongoMemoryServer.create();
        const uri = mongoServer.getUri();
        await mongoose.connect(uri, mongooseOptions);
        console.log("DB Connected to in-memory MongoDB");
        return { type: "memory", uri };
    } catch (fallbackError) {
        console.error("Fallback DB connection failed:", fallbackError.message);
        throw fallbackError;
    }
};



// import mongoose from "mongoose";

// export const connectDB = async () => {
//   try {
//     console.log("Connecting to:", process.env.MONGO_URL);

//     await mongoose.connect(process.env.MONGO_URL);

//     console.log("✅ Connected to MongoDB Atlas");
//   } catch (error) {
//     console.error("❌ Atlas connection failed:");
//     console.error(error);
//     process.exit(1);
//   }
// };