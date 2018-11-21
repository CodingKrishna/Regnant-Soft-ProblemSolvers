/**Find the Number of Non Repeated Elements in an Array */
var arr=[1,2,3,3,4,2,2,5,2];
var count = 0;
for(var i = 0; i< arr.length; i++){
    var count1 = 0;
    for(var j = 0; j < arr.length; j++){
        if(arr[i]==arr[j]){
           count1++;
        }
    }
    if(count1==1){
        count++;
    }
}
console.log(count);