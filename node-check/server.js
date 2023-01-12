const http = require('http');
const server = http.createServer((req,res)=>{
    console.log(req.url, req.method, req.headers);
    res.setHeader("content-type","text/html");
    res.write("<h1>Hello Node !!</h1>");
    res.end();
});
server.listen(3000);  