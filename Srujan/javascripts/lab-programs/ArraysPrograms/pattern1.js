/* 
    sort the array according so that first two numbers have to shift left
    remaining to right
*/
var a=[4,5,6,7,8,9,10];l=1;
var temp;
l=2;
l2=3;
console.log(a);
//send first two numbers to right
for(i=0;i<a.length;i++){
    if(i<2){
         temp=a[i];
         a[i]=a[a.length-l];
         a[a.length-l]=temp;
         l--;
    }
    else
    break;  
}
//send rest numbers to the left

 m=0;

for(var i=2;i<a.length-2;i++){
  var h=i;
  for(var j=i-1;j>=0;j--){
      if(j>=m){
        temp=a[h];
        a[h]=a[j];
        a[j]=temp;
        h--;
      }
    
   
  }
  m++;
 
}
console.log(a);
