var moment = require('moment-timezone');
exports.gettimezone=function(req,res){
    res.render('timeZone',{'time': " "});
}
exports.sendtime=function(req,res){
    var input=req.query.loc;
    input = moment().tz(input).format();
    
    res.render('timeZone',{'time': input});
    
}
exports.sendtimeajax=function(req,res){
    var input=req.query.loc;
    input = moment().tz(input).format();
    console.log(input+'test');
    res.end(input);
}