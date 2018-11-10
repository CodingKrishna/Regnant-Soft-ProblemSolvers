/**program to print assendibg and desending order
 * of a given array
 */
var arr=[2,31,4,6,2,76,]
var p;
/** main logic to arange array elements in order by compering it */
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
     /**assending order sintex */
        for(var j=0; j<arr.length; j++)
        {
           console.log ("assending order "+arr[j]);
            
        }
         /**desending order sintex */

        for(var j=arr.length-1; j>=0; j--) 
        {
            console.log ("desssending order "+arr[j]);
                
        }
        