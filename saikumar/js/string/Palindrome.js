/**check if String is Palindrome */
var str = "sas";
var str1="";
for(var index = str.length-1; index >= 0; index--){
    str1 = str1+str.charAt(index);
}
if(str == str1){
    console.log("Given string is a palindrome");
}
else{
    console.log("Given string is not a palindrome");
}