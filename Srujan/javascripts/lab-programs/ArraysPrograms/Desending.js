/**
 * program for desending order
 */
var a=[20,30,10,50,60]
for(i=0;i<a.length;i++){
    for(j=i+1;j<a.length;j++){
        //swaping the lowest number
        if(a[i]<a[j]){
            var temp=a[j];
            a[j]=a[i];
            a[i]=temp;
        }
    }
}
console.log(a);