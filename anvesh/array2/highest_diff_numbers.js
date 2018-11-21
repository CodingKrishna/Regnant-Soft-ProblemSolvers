/**To find 2 Elements in the Array such that Difference between them is Largest
 */
var a=[2,3,4,12,6,10];
var low=0,heigher=0;
for(let index=0;index<a.length;index++)
{
    low=a[index];
    for(let index2=0;index2<a.length;index2++)
    {
        if(low>a[index2]&&index!=index2)
        {
               low=a[index2];
        }
        if(heigher<a[index2]&&index!=index2)
        {
               heigher=a[index2];
        }
    }
    
}
console.log(low +" and "+heigher +" are highest different values in a array ");
