/**
 * To print a given string in upper case
 */
var str="asdas     dfsfs"

var str1=""
for(var index=0;index<str.length;index++){
    str1 += String.fromCharCode(str.charCodeAt(index) - 32);
    }
console.log(str1)
