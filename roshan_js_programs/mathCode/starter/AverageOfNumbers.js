/**
 * this code generates the average of the given numbers
 */
function average(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum/arr.length;
}
var nums = [1,2,3,4];
console.log("average of "+nums+" :"+average(nums))