var a="hellow how are you all you oo";
var b="",c=0;
for(var m=0 ; m<a.length; m++)
{
    var count=0;
   for( var n=0;n<a.length;n++)
    {
        if(a[m]==a[n] &&a[m]!=" ") 
        {
              if(m>n)
            {
                break;
            }
            count++;
        }
    }
           /**sintex to print repeating highest num of times elements */    
     if(count>c&&count>1)
     {
         c=count;
         b=a[m];

     }
}   
console.log(b+" repeat hight num of times is "+c);

