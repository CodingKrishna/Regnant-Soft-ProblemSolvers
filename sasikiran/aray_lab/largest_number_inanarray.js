/*Find largest number in array*/
var arr=[1,8,88,55,69,898]
var maximum=0;

for(var i=0;i<arr.length;i++)
{
    if(maximum<arr[i])
    {
        maximum=arr[i]
    }
}
console.log("maximum number is:"+maximum)