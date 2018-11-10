/*Sort Names in an Alphabetical Order*/
var arr=["sasi","srujan","sriram","anudeep","janaki","janakiram","sai","hari","roshan","vikram"]
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
for(var i=0;i<arr.length;i++){
    
console.log("after sorting in ascending order: "+arr[i])
}
