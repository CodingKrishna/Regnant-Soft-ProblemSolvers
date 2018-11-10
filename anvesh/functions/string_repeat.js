/**program to fint how many time a string is repeat */
var a=["anvesh","hari","anvesh"];
for(var i=0;i<a.length;i++)
{ var count=1;
    for(var j=i+1;j<a.length;j++)
    {
        if(a[i]==a[j])
        {
            a[j]=0;
            count++
        }
    }
    if(a[i]!=0)
    {
        console.log(a[i]+" repeat "+count);
    }
}