/**
 * count the number of words in a string?
 */

 var str = "hello      this is javascript";

 var count=0
 for(var i=0;i<str.length;i++)
 {
    if(str.charAt(i)==' ' && str.charAt(i+1)!=' ')
    {
        count++
    }
 }
 console.log("no of words in string:"+ (count+1));
