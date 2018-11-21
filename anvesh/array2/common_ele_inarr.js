/**11. How to find common elements in three sorted array
 */
var a=[1,3,4,6,7,2];
var b=[2,4,5,7,1];
var c=[1,4,7,8,5];
      
for(let index=0;index<a.length;index++)
{
    for(let index2=0;index2<b.length;index2++)
    {
         if(a[index]==b[index2])
         {
             for(let index3=0;index3<c.length;index3++)
             {
                 if(a[index]==c[index3])
                 {
                     console.log(a[index] +" is commonly present  in three arrays")
                 }
             }
         }      
    }
}