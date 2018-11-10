/** Find the prime numbers in array */
var arr=[10,20,3,2,67,34,34,15,19];
for(var i = 0; i < arr.length; i++){
    var flag=false;
    for(var a = 2; a <= arr[i]/2; a++){
        if(arr[i]%a==0){
            flag=true;
            break;
        }
    }
    if(flag==false)
    console.log(arr[i])
}