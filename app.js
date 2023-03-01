const http =require("http");
const date =require("./date");

http.createServer(function(req,res){//crear servidor http
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(`La fecha actual es: ${date.mydatetime()}` );


}).listen(8080);