var arr = [1,2,3,4,4,4,2,1,4,5,3];
var arr2 = [];
var count = 0,pos=0;
for(var i=0;i<arr.length;i++){
    for(var j=i;j<arr.length;j++){
        if(arr[i] == arr[j] && i!=j)count++;
    }
    if(count>=1){
        for(var k=0;k<arr2.length;k++){
            if(arr[i] != arr[k]){
                arr2[pos] = arr[i];
                pos++;
            }
        }
        console.log(arr[i]+" repeated "+(count)+" times");
        count = 0;
    }
}