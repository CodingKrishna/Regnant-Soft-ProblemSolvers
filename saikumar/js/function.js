function  add(){
  return 10+20;   
}
function sub(){
    return 20-10;
}
function mul(){
    return 20*10;
}
function div(){
    return 20/10;
}
/** function without arguments and without returning*/
function f1(){
    console.log("f1 function");
}
/** function with arguments and without returning*/
function f2(x){
    console.log(x);
}
/** function without argument
function returning argument */
function f3(){
    return 5;
}
/**  function taking array as input*/
function f4(a){
    console.log("Array elements");
    for(var i = 0; i < a.length; i++){
     console.log(a[i]);
    }
}
function f5(){
    var a=[10,2,3,2,34,23];
    return a;
}
function f6(){
    console.log("returning function");
    return f4(arr);
}
function f7(a1){
    console.log("passing function")
    console.log(a1);
}
function f8(a,b){
    console.log(a+b);
}
console.log("Add: "+add());
console.log("Sub: "+sub());
console.log("Mul: "+mul());
console.log("Div: "+div());
f1();
f2(10);
console.log(f3());
var arr=[1,2,3,4,5,6];
f4(arr);
console.log(f5());
f6();
f7(f3());
f8(add(),mul());
var f9 = function(x){
    return function(y){
        return function(z){
            return x*y*z;
        }
    }
}
var r = f9(10)(3)(2);
console.log(r);