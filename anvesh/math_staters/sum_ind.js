/** program to find the sum of individual digits of a positive integer  */
var e=0;
var d=0;
/** sintex used to find sum of integer
 * passing element with help of function */
function sum(b)
{
    while(b!=0)
    {
        d=b%10;
        e+=d;
        b=parseInt(b/10);
    }
}
sum(712);
console.log(e);
