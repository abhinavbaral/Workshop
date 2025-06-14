import mongoose from "mongoose";
 async function connectDB() {
    try {
        await  mongoose.connect(process.env.MONGODB_URI);
        console.log("Mongodb connected succesfuly");
    } catch (error) {
         console.log("Mongodb connection failed");
        process.exit(1)
    }
    }
    export default connectDB;