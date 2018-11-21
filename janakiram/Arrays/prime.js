/* prime numbers in an array*/
var array = [6,7,21,17,19,3,25,44]

for(var i=0;i<array.length;i++){
    var y = true;
    var x = array[i]/2;
    for(var j=2;j<x;j++){
        if(array[i]%j==0){
            /*console.log(array[i]+'is not a prime')*/
            y=false;
            break;
        }

    }
    if (y==true){
        console.log(array[i]+'is a prime')
    }
}

/*sum of all array elements*/
