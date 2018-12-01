var http = require('http')
var fs = require('fs')
var url = require('url')
var mysql = require('mysql')

http.createServer(function(req,resp){
    var con = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'root',
        database :'mydb'
    
    })

    var adr = req.url
    var q =url.parse(adr,true)
    if(q.pathname=='/registration.html'){
        fs.readFile('.'+q.pathname,function(err,data){
            if (err) throw err
            resp.writeHead(200);
            return resp.end(data.toString('utf8'));
        })
    }
    if (q.pathname=='/hello'){
        var adr2 = req.url
        var p = url.parse(adr2,true)
        var qdata = p.query
        var id = qdata.id
        console.log(name)
        var name = qdata.name
        var address = qdata.address
        var email = qdata.email
        var phone = qdata.phone

        con.connect(function(err,data){
            if (err) throw err
            console.log('connected')
            var sql = "INSERT INTO customerprac(id,name,address,email,phone) VALUES ?";
            var values = [[id,name,address,email,phone]]
            con.query(sql, [values], function (err, result){
                if (err) throw err
                resp.end('1 record inserted')

            })

        })

    }

}).listen(3201)