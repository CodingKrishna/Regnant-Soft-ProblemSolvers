/**program to print a multiplication table */
var x=3;
var y=1;
function table(x)
{
  while(y<=10){
     var z=x*y;
     console.log(x+" * "+y+" = "+z);
     y++;
   }
}
table(x);