/*find vowels and consonants in a string */
var a="janaki";
var  z=0;
var c=0;
for(i=0;i<a.length;i++){

    if(a[i]=='a'|a[i]=='e'|a[i]=='i'|a[i]=='o'|a[i]=='u')
    {
        z++;
        
    }
    
}
console.log("vowels count===>"+z)
for(i=0;i<a.length;i++)
{
    if(a[i]!='a'&a[i]!='e'&a[i]!='i'&a[i]!='o'&a[i]!='u')
    {
        c++;
        
    }
}
console.log("consonants count===>"+c)