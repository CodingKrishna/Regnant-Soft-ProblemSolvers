/**
 * this code takes in a json object as argument and prints 
 * members of that object
 */


var std = {
    name : "",
    rollno : 0,
    phno : 0
}
/**
 * function that takes in a json object as argument
 * @param {json object} obj 
 */

function objReturn(obj){
    obj.name = "john"
    obj.rollno = 234542
    obj.phno = 9876543212

    return obj
}

console.log(std)
var std = objReturn(std)
console.log(std)