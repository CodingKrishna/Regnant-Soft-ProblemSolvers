var http = require("http");
var url = require("url");
var fs = require("fs");
var db = require("./db");
http.createServer(function(req,res){
    var q = url.parse(req.url,true);
    var filename = q.pathname;
    if(filename === "/home"){
       let file = "./html"+filename+".html";
       res.writeHead(200, {'Content-Type' : 'text/html'});
       fs.readFile(file, function(err,data){
           if(err) throw err;
           res.write(data);
           res.end();
       });
    }
   else if(filename === "/login.html"){
       let file = "./html"+filename;
       res.writeHead(200, {'Content-Type' : 'text/html'});
       fs.readFile(file, function(err, data){
           res.write(data);
           res.end();
       });
    }
    else if(filename === "/registration.html"){
           let file = "./html"+filename;
           res.writeHead(200, {'Content-Type' : 'text/html'});
           fs.readFile(file, function(err, data){
               res.write(data);
               res.end();
           });
    }
    else if(filename === "/withdraw.html"){
        let file = "./html"+filename;
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.readFile(file, function(err, data){
            if(err) throw err;
            res.write(data);
            res.end();
        })
    }
    else if(filename === "/deposit.html"){
        let file = "./html"+filename;
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.readFile(file, function(err, data){
            if(err) throw err;
            res.write(data);
            res.end();
        })
    }
    else if(filename === "/registration"){
        let q1 = q.query;
        let uname = q1.uname;
        let pwd = q1.pwd;
        let email = q1.email;
        let amount = q1.amount;
        let values= [[uname,pwd,email,amount]];
        let res1 = db.insert(values,function(err,result){
            if(err) throw err;
            res.write(result);
            res.end();
        });
    }
    else if(filename === "/login"){
        let q1 = q.query;
        let uname = q1.uname;
        let pwd = q1.pwd;
        
        let res1 = db.select(uname,function(err,result){
            if(err) throw err;
            if(result.length>0){
                if(pwd == result[0].pasword){
                    res.write("Login Success");
                }
                else{
                    res.write("Login Failed");
                }
                res.end();
            }
            else{
                res.write("Invalid username");
                res.end();
            }
            
        });
    }
    else if(filename === "/withdraw"){
        let q1 = q.query;
        let uname = q1.uname;
        let withdraw = q1.withdraw; 
        
       
        db.select1(uname,function(err,result){
          if(err) throw err;
           var balance = result[0].amount;
           if(withdraw > balance){
           res.write("Insufficient balance");
           res.end();
        }
        else{
            balance = balance-withdraw;
            db.update(uname, balance, function(err,result){
                if(err) throw err;
                res.write(balance.toString());
                res.end();
            });
        }
        });
        
       
    }
    else if(filename === "/deposit"){
        let q1 = q.query;
        let uname = q1.uname;
        let deposit = q1.deposit; 
        
       
        db.select1(uname,function(err,result){
          if(err) throw err;
           var balance = result[0].amount;
           deposit = parseInt(deposit);
       
            balance = balance+deposit;
            console.log(balance);
            db.update(uname, balance, function(err,result){
                if(err) throw err;
                res.write(balance.toString());
                res.end();
            });
        
        });
        
       
    }
   
}).listen(3652);