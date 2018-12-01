exports.list = function(req, res){

    req.getConnection(function(err,connection){
         
          var query = connection.query('SELECT * FROM customerprac',function(err,rows)
          {
              
              if(err)
                  console.log("Error Selecting : %s ",err );
       
              res.render('customers',{page_title:"Customers List",data:rows});
                  
             
           });
           
           //console.log(query.sql);
      });
    
  };
  exports.add = function(req,res){
      res.render('add-customer',{page_title:'Add-Customer'})

  }
  /* saving the customer*/
  exports.save = function(req,res){
    var input = JSON.parse(JSON.stringify(req.body));
      req.getConnection(function(err,connection){
          var userdata = {
               name : input.name,
               address :input.address,
               email : input.email,
               phone:input.phone
          }
    
          var query = connection.query("INSERT INTO customerprac set ? ",userdata, function(err, rows)
        {
  
          if (err)
              console.log("Error inserting : %s ",err );
         
          res.redirect('/customers');
          
        });

          
      })

  }
  exports.delete_customer = function(req,res){
          
    var id = req.params.id;
   
    req.getConnection(function (err, connection) {
       
       connection.query("DELETE FROM customerprac  WHERE id = ? ",[id], function(err, rows)
       {
           
            if(err)
                console.log("Error deleting : %s ",err );
           
            res.redirect('/customers');
            
       });
       
    });
};


exports.edit = function(req, res){
    
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM customerprac WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('edit_customer',{page_title:"Edit Customers - Node.js",data:rows});
                
           
         });
         
         //console.log(query.sql);
    }); 
};


exports.save_edit = function(req,res){
    
    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            name    : input.name,
            address : input.address,
            email   : input.email,
            phone   : input.phone 
        
        };
        
        connection.query("UPDATE customerprac set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/customers');
          
        });
    
    });
};
