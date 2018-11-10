var n=[1,2,5,6,4,5,21,23,45,74,85,96,100,45,21]
var t=n.length
var temp=0;
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
console.log(n)
/* first largest number */
console.log(n[n.length-1])


/* second largest number */

console.log(n[n.length-2])



/* nth largest number */

var c=3;

console.log(n[n.length-c])

