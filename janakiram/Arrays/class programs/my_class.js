/* program to print least element in a given array */
var arr = [1,2,,50,-21,45,-66,-2]
var temp =0;
/*first arrange the given elements in ascending order 
*based on sorting logic */
for(var i=0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
/*as the array was in ascending order that is array elements starts from least values
* so if we print the first element that is the least value */
console.log("least element is:"+arr[0]);
		