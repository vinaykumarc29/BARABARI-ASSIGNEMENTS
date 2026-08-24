import express from 'express';
import taskRoutes from './routes/taskRoutes.js'

const app = express();

app.use(express.json());


app.use('/api/task',taskRoutes);

app.get('/',(req,res)=>{
    res.send("server is working");
});

app.listen(4000,()=>{
    console.log("server started at 4000 port")
});
