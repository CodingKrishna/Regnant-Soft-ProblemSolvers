var arr=[10,25,35,40,50,60];
for(var i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
console.log("Revserve order");
for(var i = arr.length-1; i >= 0; i--){
    console.log(arr[i]);
}
console.log("prime location");
for(var i = 0; i < arr.length; i++){
    var flag=false;
    for(var a=2; a <= i/2; a++){
    if(i%a == 0){
        flag=true;
        break;
    }
}
    if(flag==false&&i > 1){
        console.log(arr[i]+"----"+i);
    }
}
console.log("Odd location");
for(var i = 0; i < arr.length; i++){
    if(i%2==1){
        console.log(arr[i]+"----"+i);
    }
}
console.log("divible by 5");
for(var i = 0; i < arr.length; i++){
    if(i%5==0){
        console.log(arr[i]+"----"+i);
    }
}
console.log("Odd element");
for(var i = 0; i < arr.length; i++){
    if(arr[i]%2==1){
        console.log(arr[i]);
    }
}
