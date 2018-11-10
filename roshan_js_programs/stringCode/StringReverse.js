/**
 * this code takes a string as input and reverses the string
 */

 /**
  * function that takes a string argument and returns reversed string
  * @param {string to be reversed} str 
  */
function reverseString(str) {
 
    var len = str.length,temp="";
    for(var i=0;i<len;i++){
        temp+= str.charAt(len-1-i)
    }   
    return temp
}
 var mainstr = "hello this is me";
 console.log("given string :\t"+mainstr)
console.log("after reversing :\t"+reverseString(mainstr))