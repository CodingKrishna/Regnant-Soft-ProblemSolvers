/**
 * program:To delete n Characters from a given position
 * Logic:convert the string into array then use splice method to remove elemts from certain position
 */
var str="Hello this Is how are you";
var ch=str.split('');
ch.splice(0,13);
console.log(ch);
str='';
for(i=0;i<ch.length;i++){
    str+=ch[i];
}
console.log(str);