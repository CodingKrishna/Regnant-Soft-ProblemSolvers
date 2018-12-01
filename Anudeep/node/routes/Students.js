exports.list = function(req, res){

    req.getConnection(function(err,connection){
         
          var query = connection.query('SELECT * FROM Students',function(err,rows)
          {
              
              if(err)
                  console.log("Error Selecting : %s ",err );
       
              res.render('Students',{page_title:"Students - Node.js",data:rows});
                  
             
           });
           
           //console.log(query.sql);
      });
    
  };
  exports.add = function(req, res){
    res.render('add_Students',{page_title:"Add Students - Node.js"});
  };
  
  exports.edit = function(req, res){
      
      var id = req.params.id;
      
      req.getConnection(function(err,connection){
         
          var query = connection.query('SELECT * FROM Students WHERE id = ?',[id],function(err,rows)
          {
              
              if(err)
                  console.log("Error Selecting : %s ",err );
       
              res.render('edit_Students',{page_title:"Edit Students - Node.js",data:rows});
                  
             
           });
           
           //console.log(query.sql);
      }); 
  };
  
  /*Save the customer*/
  exports.save = function(req,res){
      
      var input = JSON.parse(JSON.stringify(req.body));
      
      req.getConnection(function (err, connection) {
          
          var data = {
              
              name    : input.name,
              address : input.address,
              email   : input.email,
              phone   : input.phone 
          
          };
          
          var query = connection.query("INSERT INTO Students set ? ",data, function(err, rows)
          {
    
            if (err)
                console.log("Error inserting : %s ",err );
           
            res.redirect('/Studentss');
            
          });
          
         // console.log(query.sql); get raw query
      
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
          
          connection.query("UPDATE Students set ? WHERE id = ? ",[data,id], function(err, rows)
          {
    
            if (err)
                console.log("Error Updating : %s ",err );
           
            res.redirect('/Studentss');
            
          });
      
      });
  };
  
  
  exports.delete_Students = function(req,res){
            
       var id = req.params.id;
      
       req.getConnection(function (err, connection) {
          
          connection.query("DELETE FROM Students  WHERE id = ? ",[id], function(err, rows)
          {
              
               if(err)
                   console.log("Error deleting : %s ",err );
              
               res.redirect('/Students');
               
          });
          
       });
  };