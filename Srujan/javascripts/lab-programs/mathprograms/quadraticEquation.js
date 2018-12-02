/**
 * program to find the roots of the quadratic equations 
 */
var a=2.3;
var b=4;
var c=5.6;
var root1,root2;
var detreminant=(b*b)-(4*a*c);
console.log(detreminant);
if(detreminant>0){
    root1=-b+Math.sqrt(detreminant)/(2/a);
    root2=-b-Math.sqrt(detreminant)/(2/a);
    console.log("the roots of the giben equation is : "+root1+root2)
}
else if(detreminant==0){
    root1=root2=-b/(2*a);
    console.log("the roots of the giben equation is : "+root1+root2)
}
else{
    var realpart=-b/(2*a);
    console.log("realpart"+realpart)
    var imaginarypart=Math.sqrt(detreminant)/(2*a);
    console.log("imaginary part: "+imaginarypart);
    root1=realpart+imaginarypart;
    root2=realpart+imaginarypart;
    console.log("The roots of the given equation is: "+root1+root2);
}