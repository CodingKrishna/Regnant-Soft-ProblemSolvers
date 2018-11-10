/**program to find 3,6,9 divisible values in array */
var a=[3,8,5,12,81,30];
function divisible(x)
{
    for(var i=0;i<x.length;i++)
    {
        if(a[i]%3==0||a[i]%9==0)
        {
            console.log(a[i]);
        }
    }
}
divisible(a);