import mongoose from "mongoose";


const connectDB = async () => {
    try {
         await mongoose.connect("mongodb://127.0.0.1:27017/bike")
         console.log("DB connection Sucessful ...");
         
        
    } catch (error) {
        console.error(error.message);
        process.exit(1);
        
    }
}

export default connectDB;