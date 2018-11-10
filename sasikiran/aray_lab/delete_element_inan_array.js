/*Delete the element from array*/

var arr=[1,2,3,4,5,6]
var deleteindex=3
console.log("original array:"+arr)

for(var i=deleteindex;i<(arr.length-1);i++)
{
    arr[i]=arr[i+1]
}
console.log("after deleting array:"+arr)
