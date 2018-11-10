/**program to print repeat and non repeat values in array */
var i=[1,3,2,5,1,3];

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
        console.log("repeat values "+i[m]);
    }
           /**sintex to print nonrepeating elements */    

    else if(count==1)
    {
        console.log(" nonrepeat values "+i[m]);
    }
}