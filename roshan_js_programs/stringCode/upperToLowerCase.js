/**
 * this code converts upper case characters into lower case characters
 * in a string
 */

 /**
  * function that takes string converts all upper case characters 
  * into lower case characters
  * @param {string to convert to lower case} str 
  */
 function upperToLowerCase(str) {
    var newstr = ""
    for (let index = 0; index < str.length; index++) {
       if(str.charAt(index).charCodeAt(0)>=65 && str.charAt(index).charCodeAt(0) < 91){
           newstr+=String.fromCharCode((str.charCodeAt(index)+32))
       }     
       else{
           newstr+=str.charAt(index)
       }
    }
    return newstr
 }

 var test = "This Is JavAScript"
 console.log(test)
 console.log(upperToLowerCase(test))