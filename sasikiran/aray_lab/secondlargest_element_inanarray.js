/*Find second largest element in array*/
var arr=[54,65,25,286,385]
var secondlargest =0;
var temp=0;
for(var i=0;i<arr.length;i++)
{
    for(var j=i+1;j<arr.length;j++)
    {
        if(arr[i]>arr[j])
    {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    }
}
console.log("second largest number is:"+arr[arr.length-2])