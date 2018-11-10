/**
 * this code compares two strings
 * returns -1 if string1 is lexographically of higher value than string2
 * returns 1 id string1 is lower than string2
 * returns 0 if two strings are equal 
 */

 /**
  * function that returns a positive or negative or zero depending
  * on the string arguments
  * @param {first string to compare with} firstString 
  * @param {second string to compare} secondString 
  */
 function compareStrings(firstString,secondString){
    var res = 0,count = 0
    if(str1.length != str2.length)
        res = str1.length - str2.length
    else {
        for (let index = 0; index < str1.length; index++) {
            if(res == 0){
                res = str1.charCodeAt(index)-str2.charCodeAt(index)
            }            
        }
    }
    return res
 }
 
    
 
    console.log(compareStrings('endad','unsld'))