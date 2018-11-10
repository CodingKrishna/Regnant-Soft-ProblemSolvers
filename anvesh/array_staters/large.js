/**program to print first large and second large element in array */
var arr=[21,3,32,4,23,12];
var k=arr.length-1;
var p;
/** sintex used to arrage array element in assending order */
for(var j=0; j<arr.length; j++) 
{
         for(var j1=0; j1<arr.length; j1++) 
    {
       if(arr[j]<=arr[j1]) 
       {
           p=arr[j];
           arr[j]=arr[j1];
           arr[j1]=p;
       }
    } 
}
/**sintex used to print first large element */
for(var i=1;i<=1;i++)
{
    console.log("first large "+arr[k]);
}

/**sintex used to print second large element */

for(var i=1;i<=1;i++)
{
    console.log("second large "+arr[k-1]);
}
