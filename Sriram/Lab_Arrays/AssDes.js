

/** assending order */



var arr=[4,52,1,2,8,5,9,7,4,12,25,65,45,74,32,125,45,29,32]
 function ascendingOrder(arr)

  {
        
    var temp=0
     for(var index = 0; index < arr.length; index++)
    {
       for(var j=0; j < arr.length; j++)
       {
          if(arr[index] < arr[j])
          {
              temp = arr[index]
              arr[index] = arr[j]
              arr[j] = temp
          }
       }
    }
      console.log(arr)
      
  }
  ascendingOrder(arr)





/*  
Desending Order 
*/
var arr1 = [4,52,1,2,8,5,9,7,4,12,25,65,45,74,32,125,45,29,32]

 function decendingOrder(arr1)

  {

    var temp1 = 0
    for(var index = 0; index < arr1.length; index++)
    {
        for(var j = 0; j < arr1.length;j++)
        {
            if(arr1[index] > arr1[j])
            {
                temp1 = arr1[index]
                arr1[index] = arr1[j]
                arr1[j] = temp1
            }
        }
    }
    console.log(arr1)

  }
  decendingOrder(arr1)


