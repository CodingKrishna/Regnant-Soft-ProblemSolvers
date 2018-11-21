/**Find second largest element in array */
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
console.log(" Second largest element in the array: "+a[a.length-2]);