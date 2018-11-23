/*program to print first repeating element in an array*/
var a = [2,3,4,5,2]
var count = 0;
for(i=0;i<a.length;i++){
  
    for(j=i+1;j<a.length;j++){
    
        if(a[i]==a[j])
        {
          count++;break;

        
        }
    }
    if(count > 0){
        console.log("first repeating element "+a[i])
       break ;
    }
}