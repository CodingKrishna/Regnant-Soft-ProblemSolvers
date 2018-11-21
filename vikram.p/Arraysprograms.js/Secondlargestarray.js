/**
 * Find largest number in array
 * Find second largest element in array
*/
var arr=[5,2,3,4,,6,7,8,9,1];
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
       console.log(arr[arr.length-1]);    //largest number of an array
       console.log(arr[arr.length-2]);   //second largest number of an array

  /* var y=0;
    if(y<arr[i]){
        y=arr[i];

    }
}
console.log(y);
console.log(y-1);*/