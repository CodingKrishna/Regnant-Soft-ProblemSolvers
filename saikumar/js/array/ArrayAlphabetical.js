/**Sort Names in an Alphabetical Order */
var a=["abc","bac","ses","fsd"];
var temp;
for(var i = 0; i < a.length; i++){
    for(var j = 0; j < a.length; j++){
        if(a[i]<a[j]){
           temp=a[i];
           a[i]=a[j];
           a[j]=temp;
        }
    }
}
for(var i = 0; i < a.length; i++){
    console.log(a[i]);
}