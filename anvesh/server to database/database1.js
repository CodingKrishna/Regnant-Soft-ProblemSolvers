var mysql = require('mysql');
var con = mysql.createConnection
({
  host: "localhost",
  user: "root",
  password: "root",
  database: "anvesh"
});
con.connect(function(err) {
  if(err) throw err;});
 function details(a)
{  
     con.query("SELECT * FROM anvesh", function (err, result, fields) {
  
    if (err) throw err;
     console.log(result);
     a(null,result);
   });
   
  
}
function update(a,b)
{  
  var sql="INSERT INTO anvesh(name,phonenum,age,address) values ?";
  con.query(sql,[a], function (err, result, fields) {
    if (err) throw err;
     console.log(result);
     b(null,result);
   });
   
  
}
  module.exports={details,update};
