var arr=[1,2,3,4,2,3]
var count=0;
for( var i=0;i<arr.length;i++){
    for( var j=i+1;j<arr.length;j++)
    {
        if(arr[i]==arr[j])
        {
            count++;
            break;
        }
    }



if(count>0){
    console.log(" first repeating element is"+arr[i])
    break;
}
}
