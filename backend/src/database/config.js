import mongoose from "mongoose";

export const connectDatabase = async () => {
    try {
        const connectionDB = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB online on port ${connectionDB.connection.port}`);
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }   
}