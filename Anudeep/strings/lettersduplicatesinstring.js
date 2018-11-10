/**program to print duplicate characters in a string */
var x="hello world";
var count=1;
for(var m=0 ; m<x.length; m++)
{
   count=1; 
 for( var n=m+1 ;n<x.length; n++)
   {
      if(x[m]==x[n] )              /*condition 1 */
      {
        count++;
        
      }    
   }
    if(count>1)           /*contition 2  */
    {
       console.log(x[m]+" repeat " +count);
    }
}
