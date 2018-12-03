var moment =require('moment-timezone');




exports.time = function (req,resp){
    resp.render('time',{time:''})
}

exports.timeZone= function(req,resp){

 var q=JSON.parse(JSON.stringify(req.body));

  console.log(q)
 var data ={
     time: q.time
 }

  var time_zone=moment().tz(data.time).format();
//   console.log(time_zone);


  resp.render('time',{time:time_zone})

}