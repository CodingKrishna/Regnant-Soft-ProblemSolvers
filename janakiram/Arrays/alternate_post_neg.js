var arr = [1,2,4,-7,-4,3,-11]
var arr2 = []
var j=0;
for(var i=0;i<arr.length;i++)
{
    
    if(arr[i]>0)
    {
        arr2[j] = arr[i]
       j= j+2;
    }
}
j=1
for(var i =0;i<arr.length;i++)
{
    
    if(arr[i]<0)
    {
        arr2[j]=arr[i]
        j=j+2

    }

}
for(var j=0;j<arr2.length;j++)
console.log(arr2[j]);
