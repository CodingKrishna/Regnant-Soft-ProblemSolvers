var a="listen",b="silent";
var k=[],j=[],p=0;
if(a.length==b.length)
{
    for(let index=0;index<a.length;index++)
    {
        k[index]=a[index];
    }
    for(let index2=0;index2<b.length;index2++)
    {
        j[index2]=b[index2];
    }
for(let index=0; index<k.length; index++) 
{
    for(let index1=0; index1<k.length; index1++)
    {
      if(k[index]<=k[index1])
       {
           p=k[index];
           k[index]=k[index1];
           k[index1]=p;
        }
    } 
}
for(let index=0; index<j.length; index++) 
{
    for(let index1=0; index1<j.length; index1++)
    {
      if(j[index]<=j[index1])
       {
           p=j[index];
           j[index]=j[index1];
           j[index1]=p;
        }
    } 
}
for(let indexall=0;indexall<k.length;indexall++)
{
    if(k[indexall]!=j[indexall])
    {
        console.log("given words are not anagram");
        break;
    }
   if(k[indexall]=j[indexall=j.length-1])
   {
    console.log("given words are anagram");
   } 
}

   
}else
{
    console.log("given stringes are not anagram");
}
