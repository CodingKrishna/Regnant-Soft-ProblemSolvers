/**
 * Check The given string is a palindrome (or) not 
 */

var str = "sriram"
var temp = ""
var flag = false
for(var index = str.length - 1 ; index >= 0; index--)

{
    temp = temp + str.charAt(index)
}

// console.log(temp)

  for(var i = 0; i < str.length; i++)
  {
      
          if(str.charAt(i)==temp.charAt(i))
          {
              flag = true;
          }
          else
          {
              console.log(str+" is not a Palindrome")
              break;
          }
      
  }

  if(flag==true)
  {
      console.log(str+" is a Palindrome")
  }