/**program to print ovels count in a string */
var a="hello anvesh how are you as";
var count=0,count1=0;
/** sintex used to count ovels */
for(var i=0;i<a.length;i++)
{
    if(a[i]=='a'||a[i]=='A'||a[i]=='e'||a[i]=='E'||a[i]=='i'||a[i]=='I'|a[i]=='o'||a[i]=='O'||a[i]=='u'||a[i]=='U')
    {
        count++;
    }
           else if(a[i]!=" ")
           {
               count1++;
           }
}
console.log("ovels count "+count);
console.log("consant count "+count1);
console.log(a.length);


