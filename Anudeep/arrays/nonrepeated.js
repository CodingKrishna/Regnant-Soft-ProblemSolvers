var array =[20,30,40,50,20,60,30,40];
var count =0;
for (var i = 0; i < array.length; i++)
{
    for (var j = i+1; j <array.length;j++){
        if( array[i]==array[j] ){
            count++;
        }
    }
    if(count==0){
    console.log(array[i]);
        }
    }
        