var arr = [1,2,1,3,53,45,2,1];
for(var i = 0; i < arr.length; i++){
    var count = 0;
    for(var j = i+1
        ; j < arr.length; j++){
        if(arr[i]==arr[j]){
           count++;
           arr[j]=-1;
        }
    }
    if(count>0 && arr[i]!=-1){
        console.log(arr[i]);
    }
}