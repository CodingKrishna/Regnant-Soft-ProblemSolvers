/**11. How to find common elements in three sorted array
 */
var a=[1,3,4,6,7,2];
var b=[2,4,5,7,1];
      
for(let index=0;index<a.length;index++)
{
    for(let index2=0;index2<b.length;index2++)
    {
         if(a[index]==b[index2])
         {
            console.log(a[index]+"  is common insertion elements in the  2 arrays")
         }      
    }
}