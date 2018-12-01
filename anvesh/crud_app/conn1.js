
var express = require('express');
var routes = require('./routes/databade');
var http = require('http');
var path = require('path');

var app = express();

var connection  = require('express-myconnection'); 
var mysql = require('mysql');

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

//app.use(express.static(path.join(__dirname, 'public')));

app.use(
    
    connection(mysql,{
        
        host: 'localhost', //'localhost',
        user: 'root',
        password : 'root',
        port : 3306, //port mysql
        database:'anvesh'

    },'request') //or single

);
app.get('/databade', routes.list);
app.get('/databade/add', routes.add);
app.post('/databade/add', routes.save);
app.get('/databade/delete/:id', routes.delete_customer);
app.get('/databade/edit/:id', routes.edit);
app.post('/databade/edit/:id',routes.save_edit);

app.use(app.routes)

app.listen(3100,function(err){

    console.log("runing on port 3200");
})