/**program to count first element */
var i=[1,3,1,4,3,3,4,1];
var k=[];
var index=0,rex=0,count;
for(var m=0 ; m<i.length; m++) 
{
 for( var n=m+1 ;n<i.length; n++) 
   {
         if(i[m]==i[n]) 
        {
            count=n;
            break;
        }    
    }
    if(k.length==0&&count!=0)
    {
        k[m]=0;
        index=count;
        rex=i[index];
    }
    if(index>count)
    {        index=count;

        index=count;
        rex=i[index];
    
    }
}    
console.log(rex);