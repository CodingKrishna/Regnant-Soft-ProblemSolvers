var arr = [9,8,7,6,123,5,4,3,2,1]
function ascSort(ar){
    var temp =0;
    for (let i = 0; i < ar.length; i++) {
        for (let j = i+1; j < ar.length; j++) {
            if(ar[i]>ar[j]){
                temp = ar[i];
                ar[i] = ar[j];
                ar[j] = temp;
            }
        }
    }
    return ar;
}
arr = ascSort(arr);
console.log(arr)