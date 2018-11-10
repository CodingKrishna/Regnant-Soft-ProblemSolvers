/**
 * Sort Names in an Alphabetical Order
 */
var arr=["vikram","shiva","nag","saipranay","saipujith","abc","ABC"]
var temp=0;
for(var i=0;i<arr.length;i++)
{

    for(var j=i+1;j<arr.length;j++)
    {

       if(arr[i]>arr[j])
       {
           temp=arr[i];

           arr[i]=arr[j];

           arr[j]=temp;
       }
    
    }
}       
         /*for(var a: arr)
         {

            console.log(a);

         }*/
         for(var i=0;i<arr.length;i++)
        {  
                                         //Asending order
            console.log(arr[i]);
        }