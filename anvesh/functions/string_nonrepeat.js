/**program to print non repeting word */
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
    if(a[i]!=0&&count==1)
    {
        console.log(a[i]+" non repeat "+count);
    }
}