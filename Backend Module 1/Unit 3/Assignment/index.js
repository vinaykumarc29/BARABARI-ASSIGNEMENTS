const http = require('http');


const server = http.createServer((req,res)=>{
    let path = req.url;
    let statusCode = 200;
    let output = ``;
    if(path == `/` || path == `/home`){
        output = `<h1>Welcome to Home Page</h1>`;
    }else if(path == `/about`){
        output = `<h1>This is About Section</h1>`;
    }else{
        output = `<h1>404 Page Not Found!!</h1>`;
        statusCode=404;
    }

    res.writeHead(statusCode,{'content-type':'text/html'});
    res.end(output);
});


server.listen(8000,'127.0.0.1',()=>{
    console.log(`Server Started At Port 8000`);
});