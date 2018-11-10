    /* ************************* examples on functions in javascript ****************** */
/**
 * function with no return value and no arguments
 */
function f1(){
    console.log("f1 function");
}
/**
 * function which has an argument and no return type
 * @param {variable} x 
 */
function f2(x){
    console.log("value is: "+x);
}
/**
 * function with no arguments but returns a value
 */
function f3(){
    var num = 90;
    return num;
}
/**
 * function that takes an array as an argument and returns 
 * that array
 * @param {Array} arr 
 */
function arrex(arr){
   /* for(var i = 0;i < arr.length;i ++){
        console.log(arr[i]);
    }
    console.log(arr);*/
    return arr;
}
/*
f1();
f2(23);
console.log(f3());
var arr1 = [1,2,3,4,2,5,2];
var ex = 234;
arrex(arr1);
arrex(ex);
var resultarr = arrex(arr1);
console.log("returned array :"+arrex(arr1));
console.log("returned variable :"+resultarr);

//function returning another function
function example(){
        function fn()
        {
            console.log("returned function");
            return "hjgjhgjh"
        }
        return fn();
}
function exmp(){
    var fun =  function (){
        return "anony function";
    }
    return fun;
}

var variable = exmp();
console.log(example());
console.log("returning function : "+exmp())
console.log("calling function with a variable : "+variable())
console.log("function declaration in variable : "+variable)
*/
/*
function arg(xx,xy){
   console.log("value from first function:"+ xx(23,43));
    console.log("value from second function:"+xy(987,55));

    console.log("function defn xx:"+xx)
    console.log("function defn xy:"+xy)
}
//giving whole function definitions as arguments
arg(function (a,b){     //argument one
        console.log("function as argument");
        return a+b;
    },
    function (a,b){     //argument two
        console.log("second function as argument");
        return a-b;
    }
);
*/

console.log(
    (function (x,y){
    return x*y+" self invoking anonymous function";
})(12,4)
);