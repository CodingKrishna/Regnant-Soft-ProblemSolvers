/**program to print positive and negative values 
 * in alter nate position 
 */
var a=[-11,2,15,-1,12,13];
var a1=[],j=0;
var m=[], n=0;
/**
for(var i=0;i<a.length;i++){
    if(i%2!=0){
        a[i]=-a[i];
    }
}
for(var i=0;i<a.length;i++){
    console.log(a[i]);
    
}*/
/** superating positive and negative values in diff arrays  */
for(var i=0;i<a.length;i++)
{
    if(a[i]>0)
    {
      a1[j]=a[i];
       j++;
    }
    else
    {
        m[n]=a[i];
        n++;
    }
}
console.log(a1+"   "+m);


/** passing positive and negative in to array by alternatively */
n=0,j=0
for(var i=0;i<a.length;i++)
{
    if(i%2==0)
    {
        if(j<=a1.length-1)
        {
            a[i]=a1[j];
            j++;
        }
        else
        {
            a[i]=m[n];
            n++;
        }
    }else
    {
        if(n<=m.length-1)
        {
            a[i]=m[n]
            n++;
        }else
        {
            a[i]=a1[j];
            j++;
        }
    }
    
}
console.log(a);