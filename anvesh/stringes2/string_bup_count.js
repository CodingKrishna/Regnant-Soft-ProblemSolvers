var i="hello how are you"
for(var m=0 ; m<i.length; m++)
{
    var count=0;
   for( var n=0;n<i.length;n++)
    {
        if(i[m]==i[n] ) 
        {
              if(m>n)
            {
                break;
            }
            count++;
        }
    }
           /**sintex to print repeating elements */    

    if(count>1)
    {
        console.log(i[m] +" repeat " +count);
    }
}   
