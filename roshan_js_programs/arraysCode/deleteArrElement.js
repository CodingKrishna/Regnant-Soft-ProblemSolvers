var arr = [1,2,3,4,5,6,7,8,9];
var ele = 4;
function deleteElement(x,y){
    var arr2 = [],pos = 0;
    for (let i = 0; i < x.length; i++) {
        if(arr[i] != y){
            arr2[pos] = arr[i];
            pos++;
        }        
    }
    return arr2;
}
arr = deleteElement(arr,ele);
console.log(arr);