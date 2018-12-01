/**program to print prime num in a array  */
var a=[10,2,3,6];
var k=true;
/**sintax  to check prime num are not */
for(var i=0;i<a.length;i++)
{
    for(var k=2;k<a[i]/2;k++)
    {
        if(a[i]%k==0)
        {
            k=false;
            break;
        }
    }
    if(k)
    {
        console.log("prime no "+a[i]);
    }else
    {
        console.log(" ");
    }
}
    
