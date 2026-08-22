const http = require("http");
const fs = require("fs");

// Read the template once
const template = fs.readFileSync("./Templates/index.html", "utf-8");

const server = http.createServer((req, res) => {

    let content = "";
    let statusCode = 200;

    if (req.url === "/" || req.url === "/home") {

        content = "You are in home page";

    } else if (req.url === "/contact") {

        content = "You are in contact page";

    } else if (req.url === "/about") {

        content = "You are in about page";

    } else {

        content = "Error 404: Page not found";
        statusCode = 404;

    }

    const output = template.replace("{{content}}", content);

    res.writeHead(statusCode, {
        "Content-Type": "text/html"
    });

    res.end(output);

});

server.listen(8000, "127.0.0.1", () => {
    console.log("Server running at port 8000");
});