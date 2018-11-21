/**
 * this code prints out first non repeated character in the given string
 */

 var str = "hehlelowowrld"
 var count = 0;
 for(var i=0;i<str.length;i++){
     for(var j=0;j<str.length;j++){
         if(str.charAt(i) == str.charAt(j) && i!=j){
            count = 1;
            break;
         }
        else count = 0;
     }
     if(count == 0){
         console.log("\'"+str.charAt(i)+"\'")
         break;
     }
 }