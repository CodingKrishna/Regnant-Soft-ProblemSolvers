// predefined and 3rd party module
var express = require('express');
var app = express();
var path =require("path");
// var connection = require("express-myconnection");

var moment =require('moment-timezone');

//my modules

var timeZone = require('./routes/time_view')



app.set('views',path.join(__dirname,'views'));

app.set('view engine','ejs');


app.use(express.logger('dev'));
app.use(express.json());

app.use(express.urlencoded());
app.use(express.methodOverride());


app.use(express.static(path.join(__dirname,'public')));


app.get('/', timeZone.time);
app.post('/time/zone', timeZone.timeZone);




app.listen(4522,function(err){
    console.log("server Running at 4522")
});