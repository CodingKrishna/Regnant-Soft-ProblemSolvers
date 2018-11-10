/**
 * Remove White space from a given string
 */

var c='Javascript is easy'
var g=""
 

for(var index = 0; index < c.length; index++)

 
 { 
      if(c.charAt(index)!=" ")
      {
          g = g + c.charAt(index)
      }
 }
console.log(g)