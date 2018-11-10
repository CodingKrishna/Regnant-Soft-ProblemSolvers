/**program to print arr in assending order
 * thing alphabeds is in reverse
 * ex:z=1(index)
 * a=26(index)
 * based on that he have to print assending order
 */
var arr=['a','b','c','c','e'];
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
     
         /**desending order sintex */

        for(var j=arr.length-1; j>=0; j--) 
        {
            console.log ("assending order "+arr[j]);
                
        }
