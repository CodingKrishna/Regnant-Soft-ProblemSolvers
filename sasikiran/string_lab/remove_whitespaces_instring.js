/**
 * program to remove all white spaces from a string
 */
var str = "   hello      this is javascript";
var s="";

 for(var i=0;i<str.length;i++)
 {
    if(str.charAt(i)!=' ')
    {
        s=s+str.charAt(i);
    }
 }
 console.log(s)