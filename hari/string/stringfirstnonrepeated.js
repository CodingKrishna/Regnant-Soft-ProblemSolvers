/*program to print first non repeated character from string*/
var a = "javatpoint is"
for(i=0;i<a.length;i++){
var count=0;
   for(j=i+1;j<a.length;j++){
       if(a[i]==a[j])
       {
           console.log("first non repeated character====>"+a[i-1])
           count++;
           break;
       }
    
    }
    if(count>0)
    {
        break;
    }


}
