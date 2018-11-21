var arr = ["qwsedfg","qwesdghjk","qwesdfghkliuytf","uthf","vghyesd"]
function alphabeticalOrder(ar){
    var temp = "";
    for(var i = 0;i < ar.length;i ++){
        for (let j = i+1; j < ar.length; j++) {
            if(ar[j]<ar[i]){
                temp = ar[i];
                ar[i] = ar[j];
                ar[j] = temp;
            }
        }
    }
    return ar;

}
arr = alphabeticalOrder(arr)
console.log(arr)
