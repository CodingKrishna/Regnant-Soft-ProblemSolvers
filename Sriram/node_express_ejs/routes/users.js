
exports. usersList= function (req,resp){
    req.getConnection(function(err,connection){
        if(err)
        {
            console.log("cant create connection")
        }
        var q=connection.query('SELECT * FROM user',function(err,row){
                   
            if(err) {
                console.log("error "+err)
            }
            resp.render('user',{page_title:'Users List',data:row})
        })
    })
}


exports.addUsers= function (req,resp){

    //    console.log("inADD USERS")
        resp.render('addUser',{page_title:"Enter Details Here"})
   
}

exports.save = function(req,resp){
  
    var input = JSON.parse(JSON.stringify(req.body));
console.log(input)
    req.getConnection(function(err,connection){
       var data = {
           name : input.name,
           email : input.email,
           password :input.pwd
       }
       
       
        var qr=connection.query('INSERT INTO user set  ?',data,function(err,rows){
            if(err) throw err;
            resp.redirect('/users')
        })
    })


}
exports.edit=function(req,resp){

 var id=req.params.id;
   req.getConnection(function(err,connection){

 


       var y=connection.query('SELECT * FROM user WHERE id=?',[id],function(err,rows){
           if(err) throw err;
           resp.render('edit_user',{page_title:'Edit Details:',data:rows})
       })
   })


}

exports.save_edits = function(req,resp){

    var input = JSON.parse(JSON.stringify(req.body));

    var id = req.params.id;
    req.getConnection(function(err,connection){

        var data = {
            name : input.name,
            email : input.email
             }
        
        var t=connection.query('UPDATE user set ? WHERE id= ?',[data,id],function(err,rows){
   console.log(data);
            if(err) throw err;
            resp.redirect('/users');

        })
    })
}






exports.delete= function (req,resp){
    var id=req.params.id;

   req.getConnection(function(err,connection){
       var t=connection.query('DELETE from user WHERE id=?',[id],function(err){
           if(err) throw err;
           resp.redirect('users')
       });
   })



}