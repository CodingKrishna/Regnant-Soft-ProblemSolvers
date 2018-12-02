var http=require('http');
var url=require('url');
var fs=require('fs');
const { parse } = require('querystring');

http.createServer(function(req,res){
    var enteredUrl=req.url.split('?')[0];
    if(enteredUrl==='/one.html'){
        console.log(req.url.substring(1));
        fs.readFile("./"+enteredUrl,function(err,data){
            if(err) throw err;
            return res.end.write(data.toString());
        });
    }
    else if (enteredUrl === '/details.html') {
        console.log('req.url.substring(1)', req.url.substring(1));
        
        fs.readFile('./'+req.url.substring(1),
            function(err, data) {
                if (err) throw err;
                res.writeHead(200);
                return res.end(data.toString('utf8'));
        });
    }
    else if(enteredUrl==='/done'){
        console.log('[HK] inside ')
        console.log('req.url.substring(1)', req.url.substring(1));
        var queryData = url.parse(req.url, true).query;
        console.log('queryData>>', queryData);
            res.writeHead(200,{'Content-type':'application/json'});
                return res.end(JSON.stringify(queryData));
        
    }
    else{
        res.writeHead(200, {'Content-Type': 'text/html'}); 
        res.write('Node.js says hello!'); //write a response to the client
        res.end();
    }
}).listen(3200);