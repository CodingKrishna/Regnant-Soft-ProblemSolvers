/**
 * Check the given number is armstrong number or not
 */
var n=153
var a
var c=0
var temp=n
while (n>0) {
    a=n%10
    n=parseInt(n/10)
    c=c+(a*a*a)
}
if(temp==c){
    console.log("armstrong number")
}
else{
    console.log("not an armstrong number")
}