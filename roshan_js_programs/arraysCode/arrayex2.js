var arr = [1,2,3,4,5,6,7,8,9,21,33,34,122];
var flag = false;
for (let i = 0; i < arr.length; i++) {
    if(arr[i] != 0 && arr[i] != 1){
        flag = false;
        for(var j=2;j<arr[i]/2;j++){
            
            if(arr[i]%j == 0){
                flag = false;
                break;
            }
            else flag = true;
        }
        if(flag)
        console.log(arr[i]);

    }    
}