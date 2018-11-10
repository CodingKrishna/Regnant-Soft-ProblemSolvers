var arr = [1,2,3,4,5,6,7,8,23,34567,9]
function sortDesc(ar){
    var temp = 0;
    for (let i = 0; i < ar.length; i++) {
        for (let j = i+1; j < ar.length; j++) {
          if(ar[i]<ar[j]){
              temp = ar[i];
              ar[i] = ar[j];
              ar[j] = temp;
          }  
        }        
    }
    return ar;
}
arr = sortDesc(arr);
console.log(arr)