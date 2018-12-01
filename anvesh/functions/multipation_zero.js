/**program  to print multipation of single digit is zero  */
var a=[123,43,120,136];

var b;
for(var index=0;index<a.length;index++)
{   var k=1;

     b=a[index].toString();

     for(var iner=0;iner<b.length;iner++)
     {
         k*=b[iner];
         
     }
     
            if(k==0)
            {
                console.log("position of zero index after multipation "+index)
            }

}
//console.log(b);
