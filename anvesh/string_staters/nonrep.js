/**program to print first non repeat char in a string */
var i="keerthi";
var count=1;
/** sintex used to count repeating  */
for(var m=0 ; m<i.length; m++)
 {
   count=1; 
    for( var n=m+1 ;n<i.length; n++) 
    {
            if(i[m]==i[n] ) 
            {
              count++;
              i[n]=0;
            }    
    }
    /** sintex used print first non repeat char */
    if(count<=1 && i[m]!=0)
    {
        console.log("first non repeat char "+i[m])
           break;
    }

}
console.log(i)