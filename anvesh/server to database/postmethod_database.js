var mysql = require('mysql');
var http=require('http');
var url = require('url');
var StringDecoder = require('string_decoder').StringDecoder;
var d = new StringDecoder('utf8');
var con = mysql.createConnection
({
  host: "localhost",
  user: "root",
  password: "root",
  database: "anvesh"
});

    http.createServer(function (req, res) 
{    var reqResource = url.parse(req.url,true).pathname;
    /** to get all user datails form data base */
    if(reqResource==='/details'){
    con.query("select *from anvesh", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.writeHead(200 ,{'Content-Type':'application/json'});
    return res.end(JSON.stringify(result));
  })
    }  /** to enter new user details to data base */
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
        console.log(name);
        con.query("insert into anvesh values('"+ name +"','"+num+"','"+age+"','"+add+"')", function (err, result, fields) {
        if (err) throw err;
        console.log("1 record is updated");
        res.writeHead(200 ,{'Content-Type':'application/json'});
        return res.end(JSON.stringify(body),"sucessfully updated to database");
      })
    })
        }
        /** to enter user details from  data base */
        else if(reqResource==='/deleatUser'){
         
         let body = '';
          req.on('data', chunk => {
             body +=d.write(chunk);
         });
          
           req.on('end', () => {
            body+=d.end();
          body=JSON.parse(body);
          var name=body.name;
        console.log(name);
        con.query("delete from anvesh where name='"+ name +"'" , function (err, result, fields) {
        if (err) throw err;
        console.log("record is deleat sucessfully");
        res.writeHead(200 ,{'Content-Type':'application/json'});
        return res.end(JSON.stringify(body) +"sucessfully record is deleat from database");
      })
    })
        }
    
    
    else {
        res.writeHead(200); 
        res.write('enter correct url'); //write a response to the client
        res.end(); //end the response

    }

}).listen(4200); //the server object listens on port 4200
console.log("server is runnig at 4200");