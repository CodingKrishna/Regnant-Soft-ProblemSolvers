
exports.list = function(req, res){

    req.getConnection(function(err,connection){
         
          var query = connection.query('SELECT * FROM details',function(err,rows)
          {
              
              if(err)
                  console.log("Error Selecting : %s ",err );
       
              res.render('getDetails',{title:"Customer Details",data:rows});
                  
             
           });
           
      });
    
  };
  
exports.add = function(req, res){
    res.render('add');
  };

  exports.save = function(req,res){
    
    var input = JSON.parse(JSON.stringify(req.body));
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            Name    : input.fname,
            Phone   : input.phone,
            Address : input.address,
            Password  : input.password,
            Userid  : input.userid 
        
        };
        
        var query = connection.query("INSERT INTO details set ? ",data, function(err, rows)
        {
  
          if (err)
              console.log("Error inserting : %s ",err );
         
              res.redirect('/databade');

          
        });
    });
};


exports.delete_customer = function(req,res){
          
    var id = req.params.id;
   
    req.getConnection(function (err, connection) {
       
       connection.query("DELETE FROM details  WHERE UserId = ? ",[id], function(err, rows)
       {
           
            if(err)
                console.log("Error deleting : %s ",err );
           
            res.redirect('/databade');
            
       });
       
    });
};

exports.edit = function(req, res){
    
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM details WHERE UserId = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('edit',{data:rows});
                
           
         });
        }); 
    };


exports.save_edit = function(req,res){
    
    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            Name    : input.Name,
            phone   : input.phone,
            Address : input.Address
        
        };
        
        connection.query("UPDATE details set ? WHERE UserId = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/databade');
          
        });
    
    });
};

