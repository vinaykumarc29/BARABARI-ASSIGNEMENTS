import express from "express";
import taskRoutes from "./routes/taskRouter.js"

const app = express();
const PORT = 4000;

app.use(express.json());
app.use("/api",taskRoutes);


app.listen(PORT,()=>{
    console.log(`Server Started At Port ${PORT}`);
})