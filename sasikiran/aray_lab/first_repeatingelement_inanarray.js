/*How find the first repeating element in an array of integers*/
var arr=[2,3,5,3,4,5,6]

for(var i=0;i<arr.length;i++)
{
    for(var j=i+1;j<arr.length;j++)
    {
        if(arr[i]=arr[j])
        {
            console.log(arr[i])
            return 
        }
    }
}

