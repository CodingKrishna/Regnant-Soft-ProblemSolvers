/**To print a given string in lower case */
var str="Hello World";
var s="";
/**charCode is used to get ascii value
 * fromCharCode is used to convert ascii to characters
 * only upper case enters in if statement
 */
for(var index = 0; index < str.length; index++){
    if(str.charAt(index) <= 'A' && str.charAt(index) >= 'z'){
        s = s+String.fromCharCode(str.charCodeAt(index)+32);
    }
    else{
        s = s+str.charAt(index);
    }
}
console.log(s);