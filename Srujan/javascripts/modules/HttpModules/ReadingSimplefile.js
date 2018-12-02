/**
 * understanding how http module works
 */
//getting the http module using require
 var http=require('http');
//cretaing server using createServer()
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write('welcome');    //write a response to the client
    res.write(req.url);  
    res.end();              //end the response
}).listen(3232);            //the server object listens on port 8080



