/**
 * Non repeated string
 */

 var s="java code is isvery very good very very";

 var s1=s.split(" ");
   console.log(s1);
 for(var i=0;i<s1.length;i++)
 {
    var count=0;
     for(var j=0;j<s1.length;j++)
    {         
             
             if(s1[i]==s1[j])
             {   
                 count=count+1;
                 
             }

          
        
        
    }
        if(count==1)
        console.log("Non repeated string:"+s1[i])
    
}    
