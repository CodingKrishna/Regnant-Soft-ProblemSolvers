/**
 * Write a program to find the sum of individual digits of a positive integer
 */

var number=1234
var x
var sum=0

while(number>0)
{
    sum=sum+(number%10);
    number=parseInt(number/10)
}
console.log("sum of indvidual digits: "+sum)