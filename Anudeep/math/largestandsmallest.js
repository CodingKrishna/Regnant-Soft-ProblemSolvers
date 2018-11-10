/*program to check largest and smallest number in a array*/
function number(arr){
    var smallnum;
    var largenum;
    var temp=[];
    for(var i=0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
         if(arr[i]>=arr[j]){
            var temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
          }
     }
 }
 console.log(smallnum=arr[0]);
 console.log(largenum=arr[arr.length-1]);
}
var result =number([12,2,3,65,64,1,48,13,45,56,48,32]);