/*program to print duplicates in an array*/
var array =[10,20,30,40,50,20,60,30];
for (var i = 0; i < array.length-1; i++)
{
    for (var j = i+1; j <array.length;j++){
        if( (array[i]==(array[j]))){
            console.log(array[j]);
        }
    }
        }