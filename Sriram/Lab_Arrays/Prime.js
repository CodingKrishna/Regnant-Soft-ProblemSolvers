/** Prime Numbers in an array */



var a=[1,2,5,6,7,8,6,9,21,22,14,52,63,19,67]


for(i=0;i<a.length;i++)
{
   var f=false;
    
     for(var l=2; l<a[i];l++)
     {

        if(a[i]%l==0)
        {
            f=true;
            break;
        }  

    }
    if(f==false)
    
        console.log(a[i])

}