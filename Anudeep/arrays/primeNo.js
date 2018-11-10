/*prime numbers in a array*/
var array=[2,3,12,54,45,87,67,45,21,37,87,56,57,64];
for(var i=0;i<array.length;i++){         
    var flag=false;
    for(var a=2;a<array[i]/2;a++)
    {
        if(array[i]%a==0){
            flag=true;
            break;
    }
  }
  if(flag==false)
  {
      console.log(array[i]);
  }
}
