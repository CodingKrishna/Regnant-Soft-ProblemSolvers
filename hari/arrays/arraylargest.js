var a=[2,3,4,5,6,7];
var maximum=0;
for(i=0;i<a.length;i++){

    if(maximum<a[i])
    {
        maximum=a[i];
    }
   
}
console.log("largest num of array "+maximum);
