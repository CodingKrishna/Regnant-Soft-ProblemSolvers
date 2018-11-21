/**
 * prime numbers present in the array
 */
var arr=[10,2,4,7,9]

for(var i=0; i<arr.length; i++)
{
var count =100;
for (var j=2; j<arr[i]; j++){

        if(arr[i]%j==0){
            count = 101;
            break;
        }
    }
    
    if(count==100)
    {
        console.log(arr[i]);
    }
}
