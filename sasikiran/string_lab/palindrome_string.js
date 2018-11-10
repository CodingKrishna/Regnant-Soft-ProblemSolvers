/**
 * check if String is Palindrome
 */
var str ="sajjas"
var strrev=""

for(var i=str.length-1;i>=0;i--)
{
    strrev=strrev+str.charAt(i)
    
}
if(str == strrev)
    {
        console.log("given string is a palindrome")
    }
    else
    {
        console.log("given string is not a palindrome")
    }