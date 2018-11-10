/**
 *program to arrange the string the in ascending order  
 */ 
 
var a=['sai','arjun','reddy']
for(i=0;i<a.length;i++){
    for(j=i+1;j<a.length;j++){
        //comparing the array elements swaping the highest element with lowest
        if(a[i]>a[j]){
            var temp=a[j];
            a[j]=a[i];
            a[i]=temp;
        }
    }
}
for(i=0;i<a.length;i++){
    console.log(a[i]);
}