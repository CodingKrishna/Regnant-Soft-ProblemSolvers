var a=[10,-8,52,-85,-4,-6,]
var b=[],j=0;
var c=[],k=0;
for(i=0;i<a.length;i++){
    if(a[i]<0){
        b[j]=a[i];
        j++
       
    }
    else{
        c[k]=a[i];
        k++;
    }
}
console.log(b.length);
console.log(c.length);

j=0,k=0;   
for(i=0;i<a.length;i++){
    if(i%2==0){
        if(j<=b.length-1){
            a[i]=b[j];
            j++; 
        }
        else{
            a[i]=c[k];
            k++;
        }

    }
    else{
        if(k<=c.length-1){
        a[i]=c[k];
        k++;
        }
        else{
            a[i]=b[j];
            j++;
        }
    }
}
console.log(a);
