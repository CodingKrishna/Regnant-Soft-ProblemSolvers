var arr = [1,2,3,4,5,6,7,8,9];
function elementSum(x){
    var sum = 0;
    for (let i = 0; i < x.length; i++) {
            sum = sum+x[i];
    }
    return sum;
}
var arrSum = elementSum(arr);
console.log("sum of array elements :\t"+arrSum);