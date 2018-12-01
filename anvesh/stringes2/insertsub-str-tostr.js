var a="hello how are you";
var b="fine",c="",j=0 ,p=4;

if(a.length>=p)
{
    for(let index=0;index<p-1;index++)
    {
        c+=a[index];
        
    }
    for(let index=0;index<b.length;index++)
    {
        c+=b[index];
    }
    for(let index=p;index<a.length;index++)
    {
        c+=a[index];
    }
    console.log(c);
}
else
{
    console.lod("give position is out off string length o we can not insert in to string")
}
