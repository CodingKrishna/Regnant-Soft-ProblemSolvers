/**Copy elements from one array to another array. */
var a=[1,2,3,4,5,6];
var b=[];
for(var i = 0; i < a.length; i++){
    b[i]=a[i];
}
for(var i = 0; i < a.length; i++){
    console.log(b[i]);
}
