/*program to check exponential value of a number*/
var y=1;
var d=0;
var e=2.17
function exponential(a)
{ 
    while(a>d)
    {
         y=y*e;
         d++;
    }
    return y;
}
var x=exponential(3);
console.log(x);