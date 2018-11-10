/**
 * Print elements at even index in array
 * Print elements at odd index in array
 */

 console.log("Even indexes");
var arr=[1,2,3,4,5,6,7,8,9,10];
    for(var i=0;i<arr.length;i++)    
    {
        if(i%2==0)          //even index
        {
            console.log(i);
    
        }
    } 


 console.log("Odd indexes");
    for(var i=0;i<arr.length;i++)    
    {
        if(i%2!=0)          //odd index
        {
            console.log(i);
    
        }
    } 