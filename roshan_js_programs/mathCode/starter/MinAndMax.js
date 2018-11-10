/**
 * this code compares two numbers and displays the minimum and maximum of the two
 */
var num1 = 234,num2 = 2345;
function min(n1,n2) {
    return ((n1<n2) ? n1 : n2)
}
function max(n1,n2) {
    return ((n1>n2) ? n1 : n2)
}

console.log("minimum of "+num1+" "+num2+" :"+min(num1,num2))
console.log("maximum of "+num1+" "+num2+" :"+max(num1,num2))