var express = require('express');
var app = express();
var path =require("path");
var connection = require("express-myconnection");
var mysql =require("mysql");

//our own exports
var routes = require('./routes/home');
var user = require('./routes/users')



app.set('views',path.join(__dirname,'views'));

app.set('view engine','ejs');


app.use(express.logger('dev'));
app.use(express.json());

app.use(express.urlencoded());
app.use(express.methodOverride());


app.use(express.static(path.join(__dirname,'public')));



app.use(
    connection(mysql,{
        host: 'localhost',
        user: 'root',
        password: 'sriram',
        port: '3306',
        database: 'mydb'
    },'request')
);



app.get('/',  routes.home_1);

app.get('/users', user.usersList);

app.get('/users/add',user.addUsers);

app.post('/users/add', user.save);

app.get('/users/delete/:id', user.delete);
app.get('/users/edit/:id', user.edit );
app.post('/users/edit/:id', user.save_edits);






  app.listen(4510,function(err){
      if(err) throw err;
      console.log("server is started at 4510")
  });
  