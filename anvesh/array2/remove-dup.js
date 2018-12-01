/**9. Write a program to remove duplicates from array
 */
var a=[1,3,5,6,2,1];
var k=[],j=0;
for(let index=0;index<a.length; index++)
{
    var count=0;
   for(let index2=0;index2<a.length;index2++)
    {
        if(a[index]==a[index2]&&index!=index2) 
        {
              if(index>index2)
            {
                break;
            }
            count++;   
            a[index2]=0
        }
    }
 if(count==0&&a[index]!=0)
 {
     k[j]=a[index];
     j++;
 }
}
console.log(k ," are array  elements after removing duplicate elements");