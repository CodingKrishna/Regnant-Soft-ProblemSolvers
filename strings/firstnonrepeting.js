/**
  * first non repeating character
  */
 var g="hiwhelloi"
 var count=1;
 for(var i=0;i<g.length;i++)
 {
     for(var j=0;j<g.length;j++)
     {
         if((g.charAt(i)==g.charAt(j)&&(i!=j))) {
            count=0;
            break;
         }
        else 
        {
             count=1;
        }
    }
     if(count==1){
         console.log(g.charAt(i))
         break;
     }
 }