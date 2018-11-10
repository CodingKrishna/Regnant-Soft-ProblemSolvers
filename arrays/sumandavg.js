
/**
 * average of the elements in array
 */
var arr=[10,20,30];
var sum=0;
for(var i=0;i<arr.length;i++){
    sum=sum+arr[i];
}
var avg=sum/arr.length;
console.log("the average  of all the elements"+"\t"+avg);