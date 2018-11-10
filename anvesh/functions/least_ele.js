/**find least element in array */
var a=[2,4,7,1,8];
 for(var j=0; j<a.length; j++)
{
var k=a[j];
for(var i=j+1;i<a.length;i++)
{
    if(k>a[i])
    {
        k=a[i];
    }
}
console.log("first least element is " +k);
break;
}
 