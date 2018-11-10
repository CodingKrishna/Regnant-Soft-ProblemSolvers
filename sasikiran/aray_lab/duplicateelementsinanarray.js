/*Find the duplicates elements inside Array*/
var arr=["sasi","kiran","sasi","sriram","srujan","kiran","sriram"]

var count=0;
for (var i = 0; i < arr.length-1; i++)
{
    for (var j = i+1; j < arr.length; j++)
    {
        if( (arr[i]==(arr[j])) && (i != j) )
        {
            console.log("Duplicate Element is : "+arr[j]);
        }
    }
}