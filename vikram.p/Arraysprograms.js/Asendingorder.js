/**
 * Sort the Array in an Ascending Order 
 * Sort the Array in an Descending Order
 */

var arr=[2,3,4,1,7,9,8,5,6,10];
var temp;
for(var i=0;i<arr.length;i++)
{

     for(var j=i+1;j<arr.length;j++)
    {

       if(arr[i]>arr[j])
       {
           temp=arr[i];
          
           arr[i]=arr[j];

           arr[j]=temp;
       }
    
    }
}
     for(var i=0;i<arr.length;i++)
    {                                 //Asending order
    console.log(arr[i]);
    }
    for(var j=arr.length;j>=0;j-- )
    {                                 //desending order
    console.log(arr[j]);
     }