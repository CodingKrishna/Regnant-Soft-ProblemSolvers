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

    function update(a,b)
    {  
      var sql="INSERT INTO registration(UserName,PassWord,email,mobile,dob,address) values ?";
      con.query(sql,[a], function (err, result, fields) {
        if (err) throw err;
         b(null,"you have registered sucesfully");
       });
      } 
    function login(z,x,y)
    {
      var sql="select PassWord from registration  where UserName=?";
      con.query(sql,[z], function (err, result, fields) {
     var k=result[0].PassWord;
           if(k===x)
           {
             y(null," valid user")
           }
           else{
             y(null," enter correct password and user id")
           }
      });

    }
    module.exports={update,login};