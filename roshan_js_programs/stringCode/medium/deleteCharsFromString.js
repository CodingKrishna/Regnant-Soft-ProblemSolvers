/**
 * this code deletes characters from a string
 */

 var str = "hello this is a string delete code"
 var index = 5,noOfChars = 5

 var result = "",indx = 0
 
 while (indx < str.length) {
    if(indx >= index-1 && indx < (index+noOfChars)-1){
        indx++
        continue;

    }
    result+=str.charAt(indx)
    indx++
 }
 console.log(result)