/*program to check if given String is Palindrome or not */
var a="madam";
var b="";
for(var i=a.length-1;i>=0;i--){
    b+=a[i];
}
if(a==b){
    console.log(a+" given string is palindrome")
}
else{
    console.log(a+" given string is not apalindrome")
}