/**program to find given string is aplenderm are not */
var a="madam";
var b="";
var j=0;
/**sintex to find alpenderm are not */
for(var i=a.length-1;i>=0;i--)
{
    b+=a[i];
    j++;
}
if(a==b)
{
    console.log("given name is aplenderm "+b)
}