/** insertion of element in a position
 * 
*/

var c=[4,5,6,1,2,3]
var d=[]

function insert(x,y)
{  
    var j=0;
    for( var index = 0; index < c.length; index++)
    {
        if(index != x)
     {
         d[j] = c[index]
         j++
     }
     else{
         d[j] = y
         j++;

         d[j] = c[index]
         j++
     }

    }
    c=d;
    
    /**
     *  
     * for(var index = 0; index < c.length; index++)
       {
        console.log(c[index])
        }
     */
    console.log(c)
   
  
}
insert(2,99)