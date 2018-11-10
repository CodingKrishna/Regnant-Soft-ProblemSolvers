var arr=[1,2,3,4,4,5,5,6,6,7,7,8,8,9,10,10];

for(var i=0;i<arr.length;i++)
{
  
    for(var j=i+1;j<arr.length;j++)
    {
         count=0;
        if(arr[i]==arr[j]) 
        {
            count=count+1;//count++;
         //  arr[j]=-1;   // you can take any value here like... -1 or -2 or 'a' or ""
            
        }
             if(count>0)
            {
                console.log(arr[i]+"is repeated")
            }
    }
}
