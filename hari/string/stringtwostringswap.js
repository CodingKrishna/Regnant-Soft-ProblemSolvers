var a = "hello";
var b = "world";
var temp;
for(i=0;i<a.length;i++){
       for(j=0;j<a.length;j++){
           
         temp = a[i]
         a[i] = a[j]
         a[j] =  temp
       }
}
console.log(a[i])