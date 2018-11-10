var arr = [1,2,3,422,5,6,7,8,9];
var e = 0;
for (let i = 0; i < arr.length; i++) {
    if(e<arr[i])    {
        e = arr[i];
    }
}
console.log("largest element :"+ e);