/**Find the nth max element in array */
var a=[1,4,3,6,3];
var x=2;
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
console.log(x+"th largest element in the array: "+a[a.length-x]);