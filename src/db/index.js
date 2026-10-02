import mongoose from "mongoose";
const connectDb= async () => {
    try {
        const  connection_instance = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MongoDb connected : ${connection_instance.connection.host}`);
    } catch (error) {
        console.log("MongoDb connection error:",error);
        process.exit(1);    
    }
};
export default connectDb;