var arr=[1,2,4,5,6,7]
var arr2=[];
var index_pos =2;
var value = 3;
for(var i=arr.length-1;i>index_pos;i--)
       arr[i]=arr[i-1];
       arr[index_pos] = value;
    for(var i=0;i<arr.length;i++){
     console.log(arr[i]);

 }