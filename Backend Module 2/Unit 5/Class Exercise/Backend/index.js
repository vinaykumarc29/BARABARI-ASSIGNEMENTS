import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDb } from "./config/db.js";
import studentRoute from "./routes/studentRoutes.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use('/api/students',studentRoute)

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server Started at ${PORT} !!`);
  });
}).catch((err)=>{
    console.log("something went wrong !!",err);
})
