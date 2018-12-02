var mysql=require("mysql");
var con=mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'srujan',
        database:'srujan'
});
//creating function to createdb
var createDb=function(name){
    con.connect(function(err){
        if(err) return err;
        let sql="create Database"
    })
}
//
function insert(values,callback){
    
        var sql="INSERT INTO student(sid,sname,marks) values ?";

        con.query(sql,[values], function (err, result, fields) {
          // if any error while executing above query, throw error
          if (err) throw err;
          // if there is no error, you have the result
         // console.log("Number of records inserted: " + result.affectedRows);
          callback(null,result.affectedRows);
        });
      
}

function show(c){
    var sql="select * from student";
    con.query(sql,function(err,result,feilds){
        if(err) throw callback(err);
        // console.log(result);
        c(null,result);
    })
}
module.exports={insert,show};