/**
 * Counting No.of Vowles and Consonants in a string
 */
var str="javascript language happy js"

var countv=0
var countc=0
 for(var index = 0; index < str.length; index++)

 {
       if((str.charAt(index)=="a")||(str.charAt(index)=="e")||(str.charAt(index)=="i")||(str.charAt(index)=="o")||(str.charAt(index)=="u"))
       {
            countv=countv+1;     
       }
       else if(str.charAt(index)!=" ")
       {
            countc=countc+1
       }

     
 }

    console.log("No.of Vowles are: "+countv)
    console.log("No.of Consonants are: "+countc)

