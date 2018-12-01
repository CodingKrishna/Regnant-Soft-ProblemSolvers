/**program to convert string to upper and lower case */
var k="HELLO anvesh";
var q="",q1="";
/** console.log("lower case convertion "+k.toLowerCase());
   console.log("upper case convertion "+k.toUpperCase());
*/
for(var index=0;index<k.length;index++)
{
    var j=k.charCodeAt(index);
      if(j>=97 &&j<=122)
      {
          var m=j-32;
          var p=String.fromCharCode(m);
          q+=p;
      }  else
      {
         q+=k[index];
      }

      if(j>=60 &&j<=90)
      {
          var m=j+32;
          var p=String.fromCharCode(m);
          q1+=p;
      }else
      {
         q1+=k[index];
      }

}
console.log("string to upper case "+q);
console.log("string to lowert case "+q1);