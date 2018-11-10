/*
    program to find vowels and consonant
    logic check the charecter weather it is vowels if it is vowels prints vowels other are consonant 
*/
var str='checking vowels and consonant'
//
var vowels=0;
var consonant=0
for(i=0;i<str.length;i++){
    var check=str.charAt(i);
    if(check=='a'||check=='e'||check=='i'||check=='o'||check=='u'){
        vowels++;
    }
    else if(check!=' '){
        consonant++;
    }
}

console.log(vowels+' number of vowels are available');
console.log(consonant+' number of consonant avilable');