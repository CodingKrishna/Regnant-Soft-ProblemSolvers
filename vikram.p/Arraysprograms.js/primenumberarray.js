//var arr=[1,2,3,67,37,31,21];
    
  var arr=[1,2,3,4,5,6,7,8,9,10];//output 4(non-prime) also printing
for(var i=0;i<arr.length;i++)
{
    var flag=false;

    for(var a=2;a<arr[i]/2;a++)
    {
        if(arr[i]%2==0)
        {
            flag=true;
            break;
        }
        
    }
    if(flag==false){
        console.log(arr[i]);
    }
}