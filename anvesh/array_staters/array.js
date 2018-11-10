var arr=[1,3,5,6,4,1,2];

for(var i=arr.length; i>=0; i--){
    console.log("reverse "+arr[i]);
}
for(var i=0;i<arr.length;i++){
  if(i%2!=0){
      console.log("odd location "+arr[i]);
  }
  
}
for(var i=0;i<arr.length;i++){
    if(i%5==0){
        console.log("5 divisible locations "+arr[i]);
    }}
    
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            console.log("arr element odd "+arr[i]);
        }
        else{
            console.log("arr element even "+arr[i]);
        }
        
    }
    var p;
    for(var j=0; j<arr.length; j++) {
			 
        for(var j1=0; j1<arr.length; j1++) {
        if(arr[j]<=arr[j1]) {
           p=arr[j];
           arr[j]=arr[j1];
           arr[j1]=p;
           
        }

} 
        }
        for(var j=0; j<arr.length; j++) {
        console.log ("ass order "+arr[j]);
            
        }
        
    