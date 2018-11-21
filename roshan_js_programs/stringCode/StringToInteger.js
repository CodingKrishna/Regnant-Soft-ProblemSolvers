/**
 * this code converts string to integer and vice versa
 */
/**
 * function to convert string to integer
 * @param {string to convert to integer} str 
 */
function stringToInteger(str) {
    return parseInt(str)
}
function integerToString(num){
    return num.toString();
}
console.log(stringToInteger("123"))
console.log(integerToString(1234))
