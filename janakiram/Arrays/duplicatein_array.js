var arr= [10,20,10,30,30,20,40,10,20]

for (i = 0; i < arr.length; i++)  
{ 
    var count=0;
    for (j = i + 1; j < arr.length; j++)  
    { 
        if (arr[i] == arr[j]){
            count++;
            arr[j]=-1;
 
        }  
            
    } 
    if(count>0 && arr[i]!=-1){
        console.log(arr[i] + " is repeating "+(count+1)+'times'); 
    }
} 