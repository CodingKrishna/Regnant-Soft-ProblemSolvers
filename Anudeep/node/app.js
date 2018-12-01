var express = require('express')
var app = express();
var http = require('http')
var mysql = require('mysql');
var fs = require('fs')
var url = require('url')
var path = require('path');
var routes = require('./routes')
var connection  = require('express-myconnection'); 
var Students = require('./routes/Students'); 

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3201);

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    
    connection(mysql,{
        
        host: 'localhost', //'localhost',
        user: 'root',
        password : 'root',
        database:'anvesh'
    },'request') //or single
);

app.get('/',routes.index)
app.get('/Students', Students.list);
app.get('/Students/add', Students.add);
app.post('/Students/add', Students.save);
app.get('/Students/delete/:id', Students.delete_Students);
app.get('/Students/edit/:id', Students.edit);
app.post('/Students/edit/:id',Students.save_edit);

app.use(app.router);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});