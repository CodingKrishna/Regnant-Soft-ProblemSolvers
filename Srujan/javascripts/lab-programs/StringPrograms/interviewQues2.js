/**
 * program to take string as a function print the string as its index
 * input=abcd
 * output=a-bb-ccc-dddd
 */
var str='abcd';
var op='';
var op2='';
function test(s){
   var ch=s.split('');
    for(i=0;i<ch.length;i++){
        for(j=0;j<=i+1;j++){
            op+=ch[i]
        }
        if(i!=ch.length-1)
        op+='-';
    }
    return op;
}
console.log(test(str));


console.log(test2(str));

function test2(s){
    console.log(s.length);
    for(i=0;i<s.length;i++){
        for(j=0;j<=i;j++){
            if(j==0){   
                op2+=s.charAt(i).toUpperCase();
            }
            op2+=s.charAt(i)
        }
        if(i!=s.length-1)
        op2+='-';
    }
    return op2;    
}