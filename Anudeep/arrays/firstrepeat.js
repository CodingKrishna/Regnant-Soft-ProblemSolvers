/*program to find 1st repeat in an array*/
var x=[1,2,3,4,4,5,6,7,2,4];
for(var i=0;i<x.length;i++){
    for(var j=i+1;j<x.length;j++){
        if(x[i]=x[j]){
           console.log(x[i]);
           return;
        }
    }
}