import mongoose from "mongoose";

export const connectDb = async () => {
  try {
   await mongoose.connect(process.env.MONGODB_URL);
   console.log("Database connected !!");
  } catch (err){
    console.log(`Database connection failed : ${err}`);
  }
};
