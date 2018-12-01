/**to find all pairs on integer array whose sum is equal to given number */
var a=[2,4,1,6,7,9],c=8;

for(let index=0;index<a.length;index++)
{
    for(let index2=0;index2<a.length;index2++)
    {  
          var sum=0;
          sum=a[index]+a[index2];
          if(sum==c)
          {
              console.log(a[index] +" "+ a[index2]+" are posibality pairs whose sum is equal to given num");
          }
    }
}