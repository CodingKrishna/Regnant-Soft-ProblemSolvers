/**program to print exponential num */
var k=1;
var d=0;
var m=2.17
/** sintex used to get exponential value using sunction
 * and return value
 */
function exponential(a)
{ 
    while(a>d)
    {
         k=k*m;
         d++;

    }
    return k;


}
var j=exponential(3);
console.log(j);