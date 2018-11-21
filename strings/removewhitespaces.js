/**
 * program to remove all white spaces
 */

 var str7="hi this is my new string";
var str8="";
for(var i=0;i<=str7.length;i++){
    if(str7.charAt(i)!=" ") {
        str8=str8+str7.charAt(i)
    }
    
}
console.log(str8);