/*Find the prime numbers in array*/
var arr=[1,5,6,8,7,11,13,17,19]

for(var i=0; i<arr.length;i++)
{
    var temp=true;
    for(var j=2;j<=arr[i]/2;j++)
    {
            if(arr[i]%j==0){
            temp=false;
            break ;
        }
    }
        if(temp){
            
            console.log("prime number"+arr[i])
            
        }
    
    
}