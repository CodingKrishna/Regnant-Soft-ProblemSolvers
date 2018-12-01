var express = require('express');
var path = require('path');
var employee = require('./routes/employee');
var connection  = require('express-myconnection'); 
var mysql = require('mysql');
var app = express();


app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');


app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());


app.use(express.static(path.join(__dirname,'public')));

app.use(
    connection(mysql,{
        host : 'localhost',
        user : 'root',
        password : 'saikumar',
        port : 3306,
        database : 'nodejs' 
    },'request')
);


app.get('/employees',employee.list);
app.get('/employees/add',employee.add);
app.post('/employees/add', employee.save);
app.get('/employees/edit/:id', employee.edit);
app.post('/employees/edit/:id', employee.editsave);
app.get('/employees/delete/:id', employee.delete);



app.use(app.router);

app.listen(4400, function(){
    console.log("server running on 4400 port")
});