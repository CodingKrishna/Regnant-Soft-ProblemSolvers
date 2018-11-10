/**
 * this code checks if two strings are anagrams
 */

 var str1 = "william shakespeare"
 var str2 = "i am a weakish speller"
 var test1 = [],pos1 = 0;
 var test2 = [],pos2 = 0;
var temp = '',flag = false;
 for (let str1index = 0; str1index < str1.length; str1index++) {
                        if(str1[str1index] != " "){
                            test1[pos1] = str1[str1index]
                            pos1++
                        }
 }
 for (let str2index = 0; str2index < str2.length; str2index++) {
    if(str2[str2index] != " "){
        test2[pos2] = str2[str2index]
        pos2++
    }
 }
 if(test1.length == test2.length)
 for (let index = 0; index < test1.length; index++) {
     for (let index2 = 0; index2 < test1.length; index2++) {
        if( test1[index] > test1[index2]){
            temp = test1[index]
            test1[index] = test1[index2]
            test1[index2] = temp
        }
        if( test2[index] > test2[index2]){
            temp = test2[index]
            test2[index] = test2[index2]
            test2[index2] = temp
        }
     }
     if(test1[index] == test2[index])
        flag = true;
        else
            flag = false
    }
 if(flag)
 console.log("both the strings are anagrams")
 console.log(test1)
 console.log(test2)