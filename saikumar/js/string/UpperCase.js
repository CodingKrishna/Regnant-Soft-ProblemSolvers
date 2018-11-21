/**To print a given string in upper case */
var str = "Hello World";
var s=""
/**charCodeAt() is used to ascii value
 * fromCharCode is used to convert ascii to character
 * only lower case characters enters into if statement
 */
for(var index = 0; index < str.length; index++){
    if(str.charAt(index) >= 'a' && str.charAt(index) <= 'z'){
       s =s +String.fromCharCode(str.charCodeAt(index)-32);
    }
    else{
        s=s+str.charAt(index);
    }
}
console.log(s);