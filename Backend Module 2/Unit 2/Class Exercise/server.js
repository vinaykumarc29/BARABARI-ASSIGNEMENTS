const express = require('express');
const path = require('path');

const app = express();


// app.use('/check',(req,res)=>{
//     res.json({"Status":"working!!"});
// });

app.use(express.static(path.join(__dirname,'Client','dist')));

app.get('/*splat',(req,res)=>{
    res.sendFile(path.join(__dirname,'Client','dist','index.html'))
})



app.listen(8080,()=>{
    console.log('server started at 8080');
});