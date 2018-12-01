var express = require('express')
var app = express();
var http = require('http')
var mysql = require('mysql');
var fs = require('fs')
var url = require('url')
var path = require('path');
var routes = require('./routes')
var connection  = require('express-myconnection'); 




var customers = require('./routes/customers'); 






app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3202);



app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded());

app.use(
    
    connection(mysql,{
        
        host: 'localhost', //'localhost',
        user: 'root',
        password : 'root',
        
        database:'mydb'

    },'request') //or single

);

app.get('/',routes.index)
app.get('/customers', customers.list);
app.get('/customers/add',customers.add);
app.post('/customers/add',customers.save);
app.get('/customers/delete/:id', customers.delete_customer);
app.get('/customers/edit/:id', customers.edit);
app.post('/customers/edit/:id',customers.save_edit);

app.use(app.router);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

    

