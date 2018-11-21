
//getting the http module using require
var http=require('http');
//Getting the url module
var url=require('url');
http.createServer(function(req,res){
    
    res.write(req.url);
    var add=req.url;
     var q=url.parse(req.url,true);
//     res.write(q.pathname);
//    // res.write(q.p);
//     res.write(q.search);
//     res.write(q.query);
console.log(q.pathname);
    res.end();
    
}).listen(3200);