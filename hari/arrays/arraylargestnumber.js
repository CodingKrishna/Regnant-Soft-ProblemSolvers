var a=[12,2,4,11];
var temp;
for(i=0;i<a.length;i++)
{
   for(j=i+1;j<a.length;j++)
   {    
       if(a[i]>a[j])
       {
        temp = a[i]
        a[i] = a[j]
        a[j] = temp;
       }

   } 
}
console.log("largest number in array "+a[a.length-1])
console.log("second largest number "+a[a.length-2])



