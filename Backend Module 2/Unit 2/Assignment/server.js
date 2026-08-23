import express from 'express';
import path from 'path';

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.static(path.join(__dirname, "Client", "dist")));

app.use((req,res)=>{
    res.sendFile(path.join(__dirname,"Client","dist","index.html"));
})

app.listen(4000,()=>{
    console.log('server started at 4000');
})
