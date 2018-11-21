/**Sort the Array in an Ascending Order */
var a=[1,4,3,6,3];
for(var i = 0; i < a.length; i++){
    for(var j = 0; j < a.length; j++){
        var temp=0;
        if(a[i]<a[j]){
           temp=a[i];
           a[i]=a[j];
           a[j]=temp;
        }
    }
}
console.log("Ascending Oder of the array");
for(var i = 0; i < a.length; i++){
    console.log(a[i]);
}