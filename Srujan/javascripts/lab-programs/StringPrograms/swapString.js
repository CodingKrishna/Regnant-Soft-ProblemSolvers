/* swaping of two words*/
var a='srujan';
var b='sai';
console.log(a);
console.log(b);
var swap=function(c,d){
    var temp=c;
    c=d;
    d=temp;
    a=c;
    b=d;
}
swap(a,b);
console.log(a);
console.log(b);