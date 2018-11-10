/**
 * program to delete n charecters from given position
 */
var str="Hello World"
var ch=str.split('');
var startIndex=2;
var endexindex=2;
//using the splice method we delete the charecters form that index
ch.splice(startIndex,endexindex);
console.log(ch);