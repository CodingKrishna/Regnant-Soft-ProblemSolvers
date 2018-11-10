/**
 * count number of vowels and consonants in a String
 */

 var s="welcome to javascript";
 countv=0;
 countc=0;

 for(var i=0;i<s.length;i++)
 {

         if((s.charAt(i)=='a')||(s.charAt(i)=='e')||(s.charAt(i)=='i')||(s.charAt(i)=='o')||(s.charAt(i)=='u'))
         {
           countv=countv+1;
         }
        else if(s.charAt(i)!=" ")
        {
             countc=countc+1;        
        }
 }
 

 console.log("vowel count is"+countv);
 console.log("consonant count is"+countc);