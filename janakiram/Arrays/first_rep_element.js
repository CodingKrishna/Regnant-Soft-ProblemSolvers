var arr = [1,1,2,4,11,2,21,4,21]
var count=0;
for(var i=0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            count++
            break;
        }
        
    }
  if(count>0){
    console.log(arr[i]+' is first repeating element')
    break;

  }
  

}
