import mongoose from "mongoose";

const db = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI!);
    } catch (error) {
        console.log(error);
    }
}

export default db;