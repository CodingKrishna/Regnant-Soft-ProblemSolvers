/** program to find  required char present are not */
var k=['a','d','e','q','u'];
function finding(c)
{
    for(var index=0;index<k.length;index++)
    {
        if(k[index]==c)
        {
            return k[index];
        }
    }
}
var d=finding('a');
var n = d.charCodeAt();


if((n>=60 && 90>=n) ||(n>=97 && 122>=n) )
{
    console.log(d+" is present in array");
}
else
{
 console.log(" searching char  not present in array");
}
