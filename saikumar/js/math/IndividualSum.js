/**Write a program to find the sum of individual digits of a positive integer. */
var a=23;
var sum=0;
var n=0;
function f1(a){
    if(a>0){
        while(a>0){
           n=(a%10);
           a=a/10;
           sum=parseInt(sum+n);
        }
        console.log("The sum of individual digits is: "+sum);
    }
    else{
        console.log("Given number is negative");
    }
}
f1(a);
