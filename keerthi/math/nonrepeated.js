var arr=[11,88,66,55,22,22,1]
11 88 66 55 22 22 1 
var y;
for(var i=0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            y=arr[i]
        }
    }
    if (y!=arr[i])
    {
        console.log(arr[i])
    }
}