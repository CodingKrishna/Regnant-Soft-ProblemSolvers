/** Find the two Elements such that their Sum is Closest to Zero
 */
var a=[2,3,4,12,6,1,10];
var low=0,heigher=0;
for(let index=0;index<2;index++)
{
    low=a[index];
    for(let index2=0;index2<a.length;index2++)
    {
        if(low>a[index2]&&index!=index2&& heigher!=a[index2])
        {
               low=a[index2];
        }
       
      
    }
    heigher+=low;
}
console.log((heigher-low)+ " and "+low+" are two elements whose sum is closer to zero");
