/**
 * convert the given string in to uppercase
 */


var c='Java is a backend language'
var g=""
 var p=""

for(var i = 0; i < c.length; i++)
{


  if((c.charAt(i)) >= 'A' && (c.charAt(i)) <= 'Z')

  {
      p = p + c.charAt(i)  // if a starting character is a capital letter is is usefull
  }
 else
 {
    p=p + String.fromCharCode(c.charCodeAt(i) - 32);
 }
    
}
console.log(p)






// for(var index = 0; index < c.length; index++)
 
//  { 
//       if((c.charAt(index)) >= 'a' && (c.charAt(index)) <= 'z')
//         {
//             g=g + String.fromCharCode(c.charCodeAt(index) - 32);
            
//         }
//        else
//        {
        
//             g = g + c.charAt(index)
//        }
//  }


// console.log(g)