/**
 * this code checks if the given string is a palindrome
 */

 var mainstr = "malayalam"
 function checkPalindrome(str) {
    var flag = false
    for(var i=0;i<str.length/2;i++){
        if(str.charAt(i) == str.charAt(str.length-1-i))
           flag = true
       else
           flag = false
    }
    return flag    
 }
 var isPalin = checkPalindrome(mainstr)
 if(isPalin)
 console.log("palindrome")
 else
 console.log("not palindrome")