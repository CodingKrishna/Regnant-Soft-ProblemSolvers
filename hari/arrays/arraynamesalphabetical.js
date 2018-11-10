/*program to print the names in a string in the alphabetical order*/
var a=["hi","ab","er","io"]
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
console.log(a)
