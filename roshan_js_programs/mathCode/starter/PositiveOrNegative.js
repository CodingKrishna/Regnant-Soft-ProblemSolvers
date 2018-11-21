/**
 * this code checks whether the given number is positive or negative or zero
 */
function check(num) {
    return ((num >= 0) ?((num > 0) ? "positive":"zero") :"negative")
}
var n = 0;
console.log(n+" is :"+check(n))