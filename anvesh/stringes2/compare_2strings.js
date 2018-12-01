var a="hello how are you";
var b="hello how are you";

if(a.length==b.length)
{
    for(let index=0;index<a.length;index++)
    {
        if(a[index]!=b[index])
        {
            console.log("given 2 stringes are not equal");
            break;
        }
        if(a[index]==b[b.length-1])
        {
            console.log("given 2 stringes are equal");
        }
    }
}
else
{
    console.log("given 2 stringes are not equal")
}