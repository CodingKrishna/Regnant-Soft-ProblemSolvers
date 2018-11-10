/**
  * sorting the array
  */
 var arr=[100,200,3000,200000]
 var Temp;
  for (var i = 0; i < arr.length; i++)
  {
      for (var j = i + 1; j < arr.length; j++)
      {
          if(arr[i] > arr[j])
          {
              Temp = arr[i];
              arr[i] = arr[j];
              arr[j] = Temp;
          }
          
      }
  }
  
  console.log("\n Result Array after Ascending Order :  ");
  for (var i = 0; i < arr.length; i++)
  {
      console.log(arr[i] + " ");
  }
 
  
  console.log("Result of desending of the array");
  for(var i=arr.length-1;i>=0;i--)
  {
      console.log(arr[i]);
     }