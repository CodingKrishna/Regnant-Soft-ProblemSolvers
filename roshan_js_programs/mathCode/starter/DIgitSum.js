/**
 * code to add individual digits and print the sum
 */
/**
 * this function calculates the sum of individual digits of the argument arg
 * takes the remainder after dividing with 10 
 * uses the function parseInt() to get whole number with out floating point values
 * adds remainder to the sum each time the loop iterates
 * @param {number} arg 
 * 
 * returns the calculated sum..
 */
function addDigits(arg) {
    var sum = 0;
    if(arg > 0){
        while (arg > 0) {
            sum += (arg%10)
            arg = parseInt(arg/10);
        }
        return sum;
    }
    else {
        console.log("given number is negative")
        return 0;
    }
    
}
var num = 1234;
console.log("sum :"+addDigits(num))