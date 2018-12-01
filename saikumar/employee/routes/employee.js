exports.list = function(req,res){
    req.getConnection(function(err, connection){
        var query = connection.query("select * from employee",function(err,rows){
            if(err) throw err;
            res.render('employee',{page_title : "Employee", data : rows});
        });
    })
}


exports.add = function(req,res){
    res.render('add_emp',{page_title : "Add Employees"});
}

exports.save = function(req, res){
    var input = JSON.parse(JSON.stringify(req.body));

    
    req.getConnection(function(err,connection){
        var data = {
            name : input.uname,
            email : input.email,
            address : input.addr,
            phone : input.phone
        };
        var query = connection.query("insert into employee set ? ",data,function(err,rows){
            if(err) throw err;
            res.redirect('/employees');
        })
    })
}

exports.edit = function(req,res){
    var id = req.params.id;
    req.getConnection(function(err,connection){
        var query = connection.query("select * from employee where id = ?",[id],function(err,rows){
            if(err) throw err;
            res.render('edit_employee',{page_title : "Edit Employees", data:rows});
        })

    });
}

exports.editsave = function(req,res){
    var input = JSON.parse(JSON.stringify(req.body));
    var id= req.params.id;
    req.getConnection(function(err,connection){
        var data = {
            name : input.uname,
            email : input.email,
            address : input.addr,
            phone : input.phone
        };
      connection.query("update employee set ? where id = ?",[data,id],function(err,rows){
          if(err) throw err;
          res.redirect('/employees');
      })
    });
}

exports.delete = function(req,res){
    var id = req.params.id;
    req.getConnection(function(err,connection){
   connection.query("delete from employee where id = ?",[id],function(err,rows){
        if(err) throw err;
        res.redirect('/employees');
    })
    });
}