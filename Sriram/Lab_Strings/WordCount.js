/**
 * Counting The Number Of Words In a String
 */

 var str1=" Hello World This Is Robo "

 var count = 1
 var str = ""
 function wordCount(str)
   
 {

     str = str1.trim()

     for(var i = 0; i < str.length; i++)
     {
         if((str.charAt(i)==" ")&&(str.charAt(i+1)!=" "))
         {
             count=count+1
         }
     }
     console.log(count)
 }
 wordCount(str)