/*program to find the largest Number and second largestNumber  in an array
    logic:sort the array the first then finding the lastIndex
*/

var a=[20,30,10,50,60]
for(i=0;i<a.length;i++){
    for(j=i+1;j<a.length;j++){
        if(a[i]>a[j]){
            var temp=a[j];
            a[j]=a[i];
            a[i]=temp;
        }
    }
}
console.log('largest number: '+a[a.length-1]);
console.log('second largest number is: '+a[a.length-2]);