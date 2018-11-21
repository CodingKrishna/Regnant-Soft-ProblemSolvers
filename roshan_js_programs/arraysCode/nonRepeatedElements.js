var arr = [1,2,3,4,4,5,3,2,1];
var flag = true;
for (let i = 0; i< arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if(arr[i] == arr[j] && i!=j) {
             flag = false;
             break;
            }
        else flag = true;
    }
    if(flag)console.log(arr[i]);
}