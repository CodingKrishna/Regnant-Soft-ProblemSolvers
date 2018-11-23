/*program to print duplicate elements in an array*/
var a=[2,3,5,3,4,5,5];

for(i=0;i<a.length;i++){
 
    for(j=i+1;j<a.length;j++){
    
        if(a[i]==a[j])
        {
            
            console.log("duplicate elements are "+a[i]);
        }
        
    }
}