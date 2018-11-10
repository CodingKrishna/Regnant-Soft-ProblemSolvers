/**
 * program to find the palindrome
 * 
 * 
 */
var str='anna';
j=1;count=0;
for(var i=0;i<str.length;i++){
    //checking the first number with last number
    if(str.charAt(i)==str.charAt(str.length-j)){
        count=1;
        j++;
    }
    else{
        count=0;
        break;
    }
}
if(count==1){
    console.log(str +' it is palindrome');
}
else{
    console.log(str +' it is not palindrome');
}