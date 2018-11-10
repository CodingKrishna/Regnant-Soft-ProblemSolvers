/*Insert an Element in a Specified Position in a given Array*/

var arr=[1,2,3,4,5,6]
var indexposition =2
var newvalue = 10

for(var i=(arr.length-1); i>indexposition;i--)
{
    arr[i]==arr[i-1]
}
arr[indexposition] = newvalue
console.log("new array is: "+arr)