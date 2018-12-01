/**
 * sending the data using ejs
 */

 //gettting the required module
 var express = require('express');
 var routes = require('./routes');
 var http = require('http');
 var path = require('path');

 //load student route
 var student=require('./routes/student');
 var app=express();

 //loading express connection and mysql
 var connection  = require('express-myconnection'); 
var mysql = require('mysql');

//setting the view engine
app.set('port', process.env.PORT || 4300);
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

//using middleware
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

app.use(express.static(path.join(__dirname,'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.use(
    
    connection(mysql,{
        
        host: 'localhost', //'localhost',
        user: 'root',
        password : 'srujan',
        port : 3306, //port mysql
        database:'bank'

    },'request') //or single

);


app.get('/', routes.index);
app.get('/student',student.list);
app.get('/student/add',student.add);
app.post('/student/add',student.save);
app.get('/student/edit/:id',student.edit);
app.get('/student/delete/:id',student.delete);
app.post('/student/edit/:id',student.editsave);
//app.use(app.router);


http.createServer(app).listen(app.get('port'),function(){
    console.log('Express server listening on port ' + app.get('port'));
})