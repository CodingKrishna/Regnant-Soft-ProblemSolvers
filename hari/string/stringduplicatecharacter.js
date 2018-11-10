/*find duplicate characters in string */
var a = "janawki ramiw";
for(i=0;i<a.length;i++){
    var count=0;
    for(j=0;j<a.length;j++){
    
        if(a[i]==a[j])
        { 
            if(i>j){
                break;
            } 
         count++;
            
            
            
        }
        
    }

     if(count>1)
      {  
          console.log("duplicate characters are '"+a[i]+"' repeated "+count+" times")
     }
}
