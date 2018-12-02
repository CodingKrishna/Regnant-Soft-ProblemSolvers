var db=require('./dbMethods');
var http=require('http');
var url=require('url');
var fs=require("fs");
const StringDecoder = require('string_decoder').StringDecoder;

http.createServer(function(req,res){
   var enterdurl=req.url.split('?')[0];
    console.log(enterdurl);
   if (enterdurl === '/adddetails.html') {
        console.log('req.url.substring(1)', req.url.substring(1));
        
        fs.readFile('./'+req.url.substring(1),
            function(err, data) {
                if (err) throw err;
                res.writeHead(200);
                return res.end(data.toString('utf8'));
        });
    }
    if(enterdurl=='/adddetails'){
        console.log('req.url.substring(1)', req.url.substring(1));
        const decoder = new StringDecoder('utf-8'); 
        let body = '';
        req.on('data', chunk => {
            body += decoder.write(chunk);
        });
       
        req.on('end', () => {
            body+=decoder.end();
             body=JSON.parse(body);
             console.log(body.sid);
            
                var id=body.sid
                var name=body.sname;
                var marks=body.marks;
                var values = [
                             [id,name,marks]];
                db.insert(values,function(err,result){
                    if(err) console.log("Database error!");
                    console.log(result);
                    res.writeHead(200, {'Content-Type': 'Application/json'})
                    res.write(JSON.stringify(result));
                    res.end();
                });        
        });
    }  
    else if(enterdurl=='/print'){
        db.show(function (err, result) {
            if (err) console.log("Database error!");
           else 
           console.log(result);
           res.writeHead(200, {'Content-Type': 'application/json'})
           res.write(JSON.stringify(result));
           res.end();

           });
    }  

}).listen(3200);



//     var con=mysql.createConnection({
            //         host:'localhost',
            //         user:'root',
            //         password:'srujan',
            //         database:"srujan"
            //     });
            //     con.connect(function(err){
            //         if(err) throw err
            //         sql="insert into student(sid,sname,marks) values ?";
            //         var values = [
            //             [id,name,marks]];
            //             con.query(sql, [values], function (err, result) {
            //                 if (err) throw err;
            //                 console.log("Number of records inserted: " + result.affectedRows);    
            //             })
            //             sql="select * from student";
            //             con.query(sql,function(err,result){
            //                 if(err) throw err;
            //                 http.writeHead(200,"text/html");
            //                 http.write(result);
            //             })
            //    })