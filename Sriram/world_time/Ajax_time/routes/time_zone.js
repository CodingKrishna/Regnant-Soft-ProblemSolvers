var url = require('url');

var moment =require('moment-timezone');



exports.time=function (req,resp){

    resp.render('time_ajax')
}

exports.timezone=function(req,resp){
    var input =url.parse(req.url,true).query;

    var t=moment().tz(input.time).format();
    console.log(t)
    resp.send(t);

}
// exports.timezone2=function(req,resp){
//     var q=JSON.parse(JSON.stringify(req.body));

// var input ={
//     time: q.time
// }


//     var t=moment().tz(input.time).format();
//     console.log(t)
//     resp.send(t);

// }