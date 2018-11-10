/**Sort the Array in Descending Order */
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
console.log("Desending Oder of the array");
for(var i = a.length-1; i > 0; i--){
    console.log(a[i]);
}