/**
 * Largest And Smallest Nummber In a List
 */

var n=[99,2,3,8,4,5,6,0,7,8,5,99,412,365,15,8,888,9]

var temp=0;

function large_small(n)
{
    var t=n.length
    for(i=0;i<t;i++)
    {
       for(j=0;j<t;j++)
       {
            
           if(n[i]<n[j])
           {
               temp=n[i]
               n[i]=n[j]
               n[j]=temp
           } 
         
       }
    }
    console.log("Largest Number In The List Is: "+n[n.length-1])
    console.log("smallest Number In The List Is: "+n[0])
}
large_small(n)
