/**
 * program to find all the substrings of string
 */
var str="Hello How Are You";
for(i=0;i<str.length;i++){
    for(j=i+1;j<str.length;j++){
        console.log(str.substring(i,j));
    }
}