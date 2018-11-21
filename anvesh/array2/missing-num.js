/**finding missing nummin array */
var a=[2,3,4,1,6,10];
var k=0;
for(let index=0;index<a.length;index++)
{
    k=a[index];
    for(let index2=0;index2<a.length;index2++)
    {
        if(k<a[index2]&&index!=index2)
        {
               b=a[index2];
        }
    }
    
}
 for(let index=1;index<=k;index++)
 {    var count=0;
     for(let index2=0;index2<a.length;index2++)
     {
         if(index==a[index2])
         { 
             break;
         }
         count++;
     }
     if(count==a.length)
     {
       console.log(" the num wich are not present in array "+index);
     }
 }