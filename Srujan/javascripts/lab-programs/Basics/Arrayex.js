var arr=['Srujan',2,15.0,5,6,8];
// for(i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
// for(i=arr.length-1;i>=0;i--){
//     console.log(arr[i])
// }

//prime index
for(i=2;i<arr.length;i++){
    var flag=0
    for(j=2;j<i;j++){
        if(i%j==0){
            flag=1
            break;
        }
        
        
    }if(flag==0){
        console.log(arr[i]+'is in the prime index'+i)
    }
    

}

for(i=0;i<arr.length;i++){
    if(i%2!=0){
        console.log(arr[i])
    }
}
for(i=0;i<arr.length;i++){
    if(arr[i]%2!=0){
        console.log(arr[i]+'is odd')
    }
    else{
        console.log(arr[i]+'is even')
    }
}

for(i=0;i<arr.length;i++){
    if(i%5==0){
        console.log(arr[i])
    }
}

function prime(n){
    var flag=0;
    m=n/2;
    if(i==1){
        return true;
    }
    for(i=2 ;i<m;i++){
        if(n%i==0){
            flag=1
             break;
         }
   
    }
    if(flag==0){
        return true
    }
    else
        return false;
}
for(i=2;i<arr.length;i++){
    var bool=prime(i)
    if(bool==true){
        console.log('prime index is: '+i)
    }
}