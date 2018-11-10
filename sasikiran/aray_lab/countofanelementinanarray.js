/*Find out the number of repetations of an element in array*/
var arr=[1,2,1,2,3]

var count=0;
for (var i = 0; i < arr.length-1; i++)
{
    for (var j = i+1; j < arr.length; j++)
    {
        if( (arr[i]==(arr[j])))
        
        {
            count++;    
            console.log("no of times elements repeated :"+arr[j]+" "+count+" times ");
        }
    }
}