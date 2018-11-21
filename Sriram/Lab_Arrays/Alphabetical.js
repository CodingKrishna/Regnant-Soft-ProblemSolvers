
/**Names in Alphabetical Order
 * 
 */
    


var arr=["cat","ball","dog","apple"]


 function alphabeticalOrder(arr)
 {

    var temp="";
    for(var index = 0; index < arr.length; index++)
    {
        for(var j = index + 1; j < arr.length; j++)
        {
            if(arr[index] >= arr[j])
            {
                temp = arr[index]
                arr[index] = arr[j]
                arr[j] = temp
            }
        }
        console.log(arr[index])
    }


 }
 alphabeticalOrder(arr)



