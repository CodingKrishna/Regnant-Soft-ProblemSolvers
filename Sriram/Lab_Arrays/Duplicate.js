var d=[1,5,3,2,4,5,3,1,2,3]
1,5,3,2,4,5,3,1,2,3


// for(i=0;i<d.length;i++)
// {
//     var count=1;
//     for(j=i+1;j<d.length;j++)
//     {
//         if(d[i]==d[j])
//         {
//              console.log(d[i])
//         }
      
//     }

// }

var temp=0;
for(i=0;i<d.length;i++)
{
    for(j=0;j<d.length;j++)
    {
        if(d[i]<d[j])
        {
            temp=d[i]
            d[i]=d[j]
            d[j]=temp
        }
        
    }
    
}
//console.log(d)
var count=1
for(u=0;u<d.length;u++)
{
   for(f=0;f<u;f++)
   {
       if(d[u]==d[f] && f!=u)
       {
           count=count+1;
       }
   }
   console.log(d[u]+"-"+count)
   count=1;
}


