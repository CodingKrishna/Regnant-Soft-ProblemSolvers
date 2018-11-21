/**
 * Print odd numbers in array
 * Print even numbers in array
 */

var arr=[1,2,3,4,5,6,7,8,9,10];

for(var i=0;i<arr.length;i++)
{
     
    if(i%2==0)
    {
        console.log("");
    }
    else
    {
        console.log(i);
    }

}

// even number printing//
for(var i=0;i<arr.length;i++)
{
     
    if(i%2!=0)
    {
        console.log("");
    }
    else
    {
        console.log(i);
    }

}