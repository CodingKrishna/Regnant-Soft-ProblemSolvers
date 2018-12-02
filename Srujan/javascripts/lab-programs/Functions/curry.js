/**
 * example of curry function
 */
var mul=function(x){
    return function(y){          //this function is the inner function of mul
        return function(z){      //     this function is the inner function of returned anonymus function 
            return x+y+z;        //        this returns the sum using two outer function variables this type 
        }                        //          of functions  are called Closures functions  
    }
}
console.log(mul(2)(3)(5));      // this type of calling is called curry function