/**
 * check if String is Palindrome
 */

var s="malayalam";
var s1="";
for(var i=s.length-1;i>=0;i--)
{
   s1=s1 + s.charAt(i);
    
}
if(s==s1)
{
   console.log(s+"  is a palindrome");
}
else
{
   console.log(s+"is not a palindrome");
}