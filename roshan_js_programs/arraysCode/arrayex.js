console.log("array example");
var arr = [1,2,4,5,7,9,10,12,15,16];
for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}
console.log(arr);
console.log("reverse order");
for(var i=arr.length-1;i>=0;i--){
    console.log(arr[i]);
}
console.log("prime positions");
/*var flag = true;
for(var index=0;index<arr.length;index++){
    var mid = index/2;
    if(!(index==0 || index == 1)){
        for(var i=0;i<mid;i++){
            if(index%i==0){
                flag = false;
                break;
            }
            else 
            flag = true;
        }
    }
    if(flag){
        console.log(arr[index]);
    }
}*/

console.log("odd index elements");
console.log(arr);
for(var i = 0;i < arr.length;i ++){
    if(i%2 == 1){
        console.log(arr[i]);
    }
}

console.log("5 multiple indexes");
console.log(arr);
console.log("index\telement")
for(var i = 0;i < arr.length;i ++){
    if(i%5 == 0){
        console.log(i+"\t"+arr[i]);
    }
}
function odd(){
    console.log(arr);
    console.log("odd elements in array");
    for(var i =0;i <arr.length;i ++){
        if(arr[i]%2 == 1){
            console.log(arr[i]);
        }
    }
    
}
