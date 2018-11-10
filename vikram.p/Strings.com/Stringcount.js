/**
 * count the number of words in a string?

 */
var s="welcome to java code                     code";
  var count=1;
   for(var i=0;i<s.length;i++)
   {
       if((s.charAt(i)==" ") && (s.charAt(i+1)!=" "))//both index position not a " "(space)
       {
      count=count+1;
       }
   }

if(count>0)
   
console.log("words count is "+count);

