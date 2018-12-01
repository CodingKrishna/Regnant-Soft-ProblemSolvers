exports.index = function(req,resp){
    resp.render('index', { title: 'Hello World' });
}