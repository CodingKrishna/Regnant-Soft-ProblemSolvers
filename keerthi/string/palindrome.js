/*check if String is Palindrome*/
var c="madam"
var d=""
for(var i=c.length-1;i>=0;i--){
d=d+c.charAt(i)
}
if(c==d){
    console.log("is palindrome")
}
else{
    console.log("not palindrome")
}