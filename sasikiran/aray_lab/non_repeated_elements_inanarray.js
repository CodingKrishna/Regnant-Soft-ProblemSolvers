/**
 *Find the Number of Non Repeated Elements in an Array 
 */
var arr=["sasi","kiran","sasi","sriram","srujan","kiran","sriram"]
var result=0
var flag =true
for(var i=0;i<arr.length;i++)
{
    for(var j=0;j<arr.length;j++)
    {
        if(arr[i]==arr[j] && i!=j)
        {
            flag =false
            break;
        } 
    }
    if(flag)
    console.log("non repeated elements:"+arr[i]);
}


