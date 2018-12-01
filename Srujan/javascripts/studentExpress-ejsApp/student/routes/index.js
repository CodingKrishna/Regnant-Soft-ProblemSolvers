/**
 * creating the index.js  file and linking it to the title name to the index.html
 */
exports.index=function(req,res){
    res.render('index',{title :'hello world '})
}