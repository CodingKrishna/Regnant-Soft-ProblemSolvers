/**program to print names in assending order */
var arr=["pavan","hari","anvesh"];
var p;
/** sintex used to print names in assending order */
for(var j=0; j<arr.length; j++) 
{
    for(var j1=0; j1<arr.length; j1++)
    {
      if(arr[j]<=arr[j1])
       {
           p=arr[j];
           arr[j]=arr[j1];
           arr[j1]=p;
        }
    } 
}
    for(var j=0; j<arr.length; j++)
    {
      console.log ("assending order "+arr[j]);
        
    }
