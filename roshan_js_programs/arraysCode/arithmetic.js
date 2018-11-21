console.log("second file");
function addition(x,y){
    return x+y;
}
function substract(x,y){
    return x-y;
}
function multiply(x,y){
    return x*y;
}
function divide(x,y){
    if(y>0)return x/y;
    else return 0;
}
var sum = addition(10,20);
var diff = substract(35,21);
var pro = multiply(12,3);
var quo = divide(23,1);
console.log("addition :"+sum);
console.log("subtraction :"+diff);
console.log("multiplication :"+pro);
console.log("division :"+quo);
