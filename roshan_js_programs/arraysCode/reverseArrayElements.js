var arr = [1,2,3,4,6,7];
for (let i = 0,j=arr.length-1; i < arr.length/2; i++,j--) {
    if(i!=j){
        var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    }
    
    
}
console.log(arr);