/**
 * print first non repeated character from String
 */

var arr="welcome to javascript";
 count=1;
for(var i=0;i<=arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            count++;
            arr[i]=0;
        
        }
    }
        if(count>=1 && arr[i]!=0){
            console.log(arr[i]+" is first non repeated")
            break;
        }
    }
