var arr=[1,1,2,2,3,4,3,4,5];

for(i=0;i<arr.length;i++) {
    count=0;
    for(j=i+1;j<arr.length;j++) {
    if(arr[i]==arr[j] && i!=j) {  // i!=j same element never check same one
    count++;
    break;
    }
    }
if(count>0){
    return arr[i];
}
}
return 0;
var rep=nthRepeatedElement(arr);
console.log(rep);

                                                                            
    
    