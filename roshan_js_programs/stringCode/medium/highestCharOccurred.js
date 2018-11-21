/**
 * this code displays highest occured character in a given string
 */

 var main = "hello world this is javascrilpt"
 var repChar = "",count = 0,tempcnt = 0
 for(var index = 0; index< main.length; index++){
     for(var index2 = 0; index2<main.length; index2++){
        if(main.charAt(index) == main.charAt(index2) && index!=index2){
            tempcnt++
        }
     }
     if(count < tempcnt){
         count = tempcnt;
         repChar += main.charAt(index)
     }
     tempcnt=0
 }
 console.log("\'"+repChar+"\'"+" repeated "+count+" times")