/**program to print missing char in array */
var a=['a','b','d','f'];
var b=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var d=[];
var k=a.length-1;
        for(var iner=0;iner<b.length;iner++)
        { 
        
              if(a[k]==b[iner])
           {
               d[iner]=b[iner]; 
               break;       
           }   
            else
            {
                d[iner]=b[iner];
                
            }
       }
for(var index=0;index<d.length;index++)
{var count=0;
    for(var iner=0;iner<a.length;iner++)
    {
        if(d[index]==a[iner])
        {
            count++;
        }
    }  
    if(count!=1)
    {
        console.log("missing char in array"+d[index]);
    }
}
