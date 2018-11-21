/**
 * program to check mysql connection and basic quires
 * first install mysql using npm
 */
//storing mysql obj in mysql
var mysql=require("mysql");
//to create connection
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'srujan',
    database:"srujan"
});


con.connect(function(err){
    if(err) throw err;
    console.log('connected');
    con.query("select * from student",function(err,result,feilds){
        if(err) return err;
        console.log("result"+result);
        
    })
    var sql="show tables";
    con.query(sql,function(err,data){
        if(err) throw err;
        console.log("table created");
    })     
});

// con.connect(function(err){
//     if(err) throw err
//     var sql="create table customers(name varchar(255),addr varchar(255))";
//     con.query(sql,function(err,data){
//         if(err) throw err;
//         console.log("table created");
//     })
    
// })


