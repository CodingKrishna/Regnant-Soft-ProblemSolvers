/**How to rearrange array in alternating positive and negative number */
var a=[1,2,3,4,5,6,7,-1,-4,-3,-2];
var b=[];
var c=[];
var j=0;
for(var i =0; i < a.length; i++){
    if(a[i]>0){
        b[j]=a[i];
        j+=2;
    }
}
j=1;
for(var i = 0; i < a.length; i++){
    if(a[i]<0){
        cancelAnimationFrame[j]=a[i];
        j+=2;
    }
}

for(var i = 0; i < a.length; i+2){
    a[i]=b[i];
    a[i+1]=c[i];
}