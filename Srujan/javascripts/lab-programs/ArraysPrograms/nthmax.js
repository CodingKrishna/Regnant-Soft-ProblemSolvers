var a=[1,3,2,4,5];
var maxNum=3;
num=a.length-maxNum;
for(i=0;i<a.length;i++){
    for(j=i+1;j<a.length;j++){
        if(a[i]>a[j]){
            var temp=a[j];
            a[j]=a[i];
            a[i]=temp;
        }
    }
}
console.log(a);
console.log(a.length-num);
