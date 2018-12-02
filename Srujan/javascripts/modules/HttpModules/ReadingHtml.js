/**
 * program is to display an html page using server
 */
var http=require('http');
var url=require('url');
var fs=require('fs');

http.createServer(function(req,res){
    var q=url.parse(req.url,true);
    var filename='.'+q.pathname;
    fs.readFile(filename,'utf8',function(err,data){
        if(err){
            res.writeHead(200,{'content-type':'text/html'});
            res.write('404 error');
        }
        else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        }
    });
    
}).listen(3200);