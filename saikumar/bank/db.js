var mysql = require("mysql");
var con = mysql.createConnection({
        host: "localhost", // ip address of server running mysql
        user: "root", // user name to your mysql database
        password: "saikumar", // corresponding password
        database: "studentsDB" // use this database to querying context
      });
      function conObj(){
        con.connect(function(err) {
        if (err) throw err;
        });
      }
function insert(values,callback){
    var sql = "insert into studentsDB.customer (username,pasword,email,amount) values ?"
    con.query(sql,[values], function (err, result, fields) {
        // if any error while executing above query, throw error
        if (err) throw err;
       // if there is no error, you have the result
       res =result.affectedRows;
       callback(null,res);
       });;
}
function select(user,callback){
    var sql1 = "select pasword from studentsDB.customer WHERE username = ?";
    con.query(sql1,[user],function(err,result,fields){
              if(err) throw err;
              callback(null,result);
           });
  }
  function select1(user,callback){
    var sql1 = "select amount from studentsDB.customer WHERE username = ?";
    con.query(sql1,[user],function(err,result,fields){
              if(err) throw err;
              callback(null,result);
           });
  }
  function update(user,balance,callback){
      var sql2 = "update studentsDB.customer set amount = ? where username = ?";
      con.query(sql2,[balance,user],function(err,result,fields){
          if(err) throw err;
          callback(null, result);
      })
  }
  module.exports = {insert,select,select1,update};