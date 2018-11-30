var mysql = require('mysql');
var http = require('http');
var fs = require('fs');
var im=require('./database1')
var url = require('url');
const { parse } = require('querystring');
var server = http.createServer(function (req, res) {
    var reqResource = req.url.split("?")[0];
    if (reqResource === '/home.html') {
        console.log('req.url.substring(1)', req.url.substring(1));
        fs.readFile('./'+req.url.substring(1),
            function(err, data) {
                if (err) throw err;
                res.writeHead(200);
                return res.end(data.toString('utf8'));
        });
    }
    if (reqResource === '/login.html') {
        console.log('req.url.substring(1)', req.url.substring(1));
        fs.readFile('./'+req.url.substring(1),
            function(err, data) {
                if (err) throw err;
                res.writeHead(200);
                return res.end(data.toString('utf8'));
        });
    }
    if (reqResource === '/registration.html') {
        console.log('req.url.substring(1)', req.url.substring(1));
        fs.readFile('./'+req.url.substring(1),
            function(err, data) {
                if (err) throw err;
                res.writeHead(200);
                return res.end(data.toString('utf8'));
        });
    }
    if (reqResource === '/withdrawal.html') {
        console.log('req.url.substring(1)', req.url.substring(1));
        fs.readFile('./'+req.url.substring(1),
            function(err, data) {
                if (err) throw err;
                res.writeHead(200);
                return res.end(data.toString('utf8'));
        });
    }
    else if (reqResource === '/createuser') {
        var de=url.parse(req.url,true).query;
         var name=de.UserName;
         var password=de.PassWord;
         var email=de.email;
         var mobile=de.mobile;
         var dob=de.dob;
         var address=de.address;
         console.log(name+ ""+email)
         var d=[[name,password,email,mobile,dob,address]];
         im.update(d,function (err, result, fields) {
           if (err) throw err;
           res.writeHead(200 ,{'Content-Type':'application/json'});
           return res.end(result);
         });
        }else  if(reqResource === '/user'){
            var de1=url.parse(req.url,true).query;
               var id=de1.UserName;
               var psw=de1.PassWord;
               console.log(id+""+psw)
               im.login(id,psw,function (err, result, fields) {
                if (err) throw err;
                res.writeHead(200 ,{'Content-Type':'application/json'});
                return res.end( result);
              })
           
    var mysql = require('mysql');
    var con = mysql.createConnection
    ({
      host: "localhost",
      user: "root",
      password: "root",
      database: "anudeep"
    });
    con.connect(function(err) {
        if(err) throw err;});   
    }   
    }).listen(3200); //the server object listens on port 4200
    console.log("server is runnig at 3200");