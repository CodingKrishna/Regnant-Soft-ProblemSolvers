/**
 * example to demonstrate currying functions
 */

 function outer(arg){
     console.log("printing argument of outer function :"+ arg)
     return function(arg2){
        return arg+arg2
     }
 }
 var res = outer(12)(34)
 console.log(res)