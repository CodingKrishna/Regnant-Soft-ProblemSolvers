var g=[44,55,66,32,24,25,25,12,12,1,2,3,1,66]
    
var l=g.length;
var t;
for(i=0;i<l;i++)
{
    for(j=i+1;j<l;j++)
    {
        if(g[i]==g[j])
        {
             t=g[i]
        }
    }
    if(t!=g[i])
    {
        console.log(g[i])
    }
}