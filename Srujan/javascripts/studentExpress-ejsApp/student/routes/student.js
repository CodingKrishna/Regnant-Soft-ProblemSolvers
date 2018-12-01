//creating the list method with request and response and exporting
exports.list=function(req,res){
    //getting the db connection with request object
    req.getConnection(function(err,connection){
        //running the query
        var query=connection.query('select * from student',function(err,rows){
            if(err){
                console.log('The error is due to : ',err);
            }
            else{
                //sending the query result to student.ejs file
                res.render('student',{title:"Student Details",data:rows});
            }
        });
    });
} ;

//creating the add function
exports.add=function(req,res){
res.render('addstudent',{title:'Adding Student Details'});
}

//creating the function to save the details of student
exports.save=function(req,res){
    var input=JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err,connection){
        var data={
            name    : input.name,
            address : input.address,
            schoolName   : input.schoolName,
            phone   : input.phone 
        }

        var query=connection.query('INSERT INTO student set ?',data,function(err,rows){
            if(err)
            console.log("Error inserting : %s",err);
            res.redirect('/student');
        });
    });
}

//creating the function to show the elements of the specific id
exports.edit=function(req,res){
    var id=req.params.id;

    req.getConnection(function(err,connection){
        
        var query=connection.query('select * from student where id = ?',[id],function(err,rows){
            if(err) console.log('Error is due to: ',err);
            res.render('editStudent',{title:'Editing page',data:rows});
        });

       
    })
}


//saving the edited content 
exports.editsave=function(req,res){
    var input=JSON.parse(JSON.stringify(req.body));
    var id=req.params.id;
    req.getConnection(function(err,connection){
        var data={
            name    : input.name,
            address : input.address,
            schoolName   : input.schoolName,
            phone   : input.phone 
        }
  
    var query=connection.query('update student set ? where id =?',[data,id],function(err,rows){
        if(err) console.log('Error is due to : ',err);
        res.redirect('/student');
    })
});
}

//function to delete 
exports.delete=function(req,res){
    var id=req.params.id;
    req.getConnection(function(err,connection){
        connection.query("DELETE FROM student  WHERE id = ? ",[id], function(err, rows){
            if(err) console.log("failed due to : ",err);
            res.redirect('/student');
        });
    })
}

