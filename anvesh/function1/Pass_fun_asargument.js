/**passing fun ass argument to another function */
function main()
{
     return 2;
}
function pass(b)
{
   return b;
}
var k=pass(main);
console.log(k)