/**
 * this code calculates the roots of the quardratic equation ax^2+bx+c=0
 */

 function rt(a,b,c){
    var x = b*b
    x = x-(4*a*c)

    x = Math.sqrt(Math.abs(x))

    return parseInt(x);
}
 var a=1,b=-4,c=12;

 var root1 = (-b+rt(a,b,c))/(2*a)
 var root2 = (-b-rt(a,b,c))/(2*a)

console.log(" root 1 :"+root1)
console.log(" root 2 :"+root2)