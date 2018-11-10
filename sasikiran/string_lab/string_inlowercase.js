/**
 * To print a given string in lower case
 */
var str="SASI KIRAN"
var str1=""

for(var i=0;i<str.length;i++){
        if(str.charCodeAt(i)>64 && str.charCodeAt(i)<91){
                str1+=String.fromCharCode(str.charCodeAt(i)+32)
        }
        else{
                str1+=str.charAt(i)
        }
}
console.log(str1)