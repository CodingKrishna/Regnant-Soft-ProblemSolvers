var x=[1,2,3,4,5,6];
for(var i=0;i<x.length;i++){
    if(i%2!=0){
    x[i]=-x[i];
}
}
for(var i=0;i<x.length;i++){
console.log(x[i]);
}