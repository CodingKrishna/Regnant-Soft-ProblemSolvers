/*program to count repeated elements in an array*/
var a=[2,3,2,4,5]
var b=2;
var count=0;
for(i=0;i<a.length;i++){
  
    if(a[i]==b)
    {
       count++;
    }
   
}
console.log("element is repeated "+count+" times");