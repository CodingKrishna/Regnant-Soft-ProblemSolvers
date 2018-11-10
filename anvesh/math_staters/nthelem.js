/**program to print nth element in array after 
 * sorting assending order  */
var arr=[21,3,32,4,23,12];
var k=3;
var p;
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
for(var i=1;i<=1;i++)
{
    console.log("first large "+arr[k]);
}
