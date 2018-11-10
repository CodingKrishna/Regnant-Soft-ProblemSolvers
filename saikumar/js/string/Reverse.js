/**Reverse a string */
var str = "hello";
var str1="";
for(var index = str.length-1; index >= 0; index--){
   str1 = str1+str.charAt(index);
}
console.log("Reverse of the given string is "+str1)