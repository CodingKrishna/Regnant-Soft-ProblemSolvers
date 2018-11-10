/**program to print repeat char in a string */
var i="anvesh hello";
var count=1;

/**sintax used to count repeating char 
 * and print only repeat char
*/
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
                    
    if(count>1&&i[m]!=0)
    {
       console.log(i[m]+" repeat " +count);
    }
}
