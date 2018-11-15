var http=require('http');
var url = require('url');
var im=require('./database1');
var StringDecoder = require('string_decoder').StringDecoder;
var d = new StringDecoder('utf8');
http.createServer(function (req, res) 
{
   var reqResource = url.parse(req.url,true).pathname;

  if(reqResource==='/details'){
      
    im.details( function (err,result) {
                      if (err) throw err;
                     console.log(result);
                     res.writeHead(200 ,{'Content-Type':'application/json'});
                     res.write(JSON.stringify(result));
                      res.end();                
    })  
        }
        else if(reqResource==='/createUser'){
          
            let body = '';
          req.on('data', chunk => {
         body +=d.write(chunk);
      });
         req.on('end', () => {
       body+=d.end();
       body=JSON.parse(body);
       var name=body.name;
       
       var num=body.num;
       var age=body.age;
       var add=body.add;
     var all=[[name,num,age,add]];
        im.update(all,function (err, result, fields) {
       if (err) throw err;
       console.log("1 record is updated");
       res.writeHead(200 ,{'Content-Type':'application/json'});
       return res.end(JSON.stringify(body),"sucessfully updated to database");
     })
   })
       }
       
        
            // else {
            //     res.writeHead(200); 
            //     res.write('enter correct url'); //write a response to the client
            //     res.end(); //end the response
        
            // }

}).listen(3200);
console.log("server is runnig at 3200");
