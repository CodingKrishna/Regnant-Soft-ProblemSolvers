/** program  to chech given num is amstrong or not */
var i=153;
 function amestrond(num)
{
    var a=0;
    var digit=0;
   var temp=num;
    while(temp>0){
        digit=temp%10;
        temp=parseInt(temp/10);
        a = a+digit*digit*digit;
    }
     if(num==a)
      {
          console.log("amstrong num "+a);
      }
          else
     {
         console.log("not amstrong num");
     }
}
   amestrond(i);
