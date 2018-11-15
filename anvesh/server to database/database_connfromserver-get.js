var mysql = require('mysql');
var http=require('http');
var url = require('url');
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
            var queryData = url.parse(req.url, true).query;
            var name=queryData.name;
            var num=queryData.phone;
            var age=queryData.age;
            var add=queryData.add;
        con.query("insert into anvesh values('"+ name +"','"+num+"','"+age+"','"+add+"')", function (err, result, fields) {
        if (err) throw err;
        console.log("1 record is updated");
        res.writeHead(200 ,{'Content-Type':'application/json'});
        return res.end(JSON.stringify(queryData),"sucessfully updated to database");
      })
        }
        /** to enter user details from  data base */
        else if(reqResource==='/deleatUser'){
            var queryData = url.parse(req.url, true).query;
            var name=queryData.name;
        con.query("delete from anvesh where name='"+ name +"'" , function (err, result, fields) {
        if (err) throw err;
        console.log("record is deleat sucessfully");
        res.writeHead(200 ,{'Content-Type':'application/json'});
        return res.end(JSON.stringify(queryData) +"sucessfully record is deleat from database");
      })
        }
    
    
    else {
        res.writeHead(200); 
        res.write('enter correct url'); //write a response to the client
        res.end(); //end the response

    }

}).listen(4200); //the server object listens on port 4200
console.log("server is runnig at 4200");