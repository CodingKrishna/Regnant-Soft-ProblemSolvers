/**
 * Reverse the given string
 */

var str = "java is a language"
var temp = ""
var flag = false
for(var index = str.length - 1 ; index >= 0; index--)

{
    temp = temp + str.charAt(index)
}

console.log(temp)