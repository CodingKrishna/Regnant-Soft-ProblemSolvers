/*program to sort array elements*/
var a=[12,2,4,11];
var temp;
for(i=0;i<a.length;i++){

   for(j=i+1;j<a.length;j++){
     
       if(a[i]>a[j])
       {
        temp = a[i]
        a[i] = a[j]
        a[j] = temp;
       }

   } 
}
for(i=0;i<a.length;i++){

    console.log("ascending order "+a[i])
} 
for(i=a.length-1;i>=0;i--){

    console.log("descending order"+a[i])
} 
