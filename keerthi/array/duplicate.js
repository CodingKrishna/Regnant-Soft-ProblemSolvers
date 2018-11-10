var arr=[56,84,3,63,29,56,29,]

for(var i=0;i<arr.length;i++)
{
    for(var j=i+1;j<arr.length;j++)
    {
        if(arr[i]==arr[j])
        {
            console.log(arr[i]);
        }
        
    }

}