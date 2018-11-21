var arr= [1,12,21,36,5]
var temp=0;
for(var i=0;i<arr.length;i++){
    for (var j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

}

		{
        console.log('largest number is '+arr[arr.length-1]);
        console.log('second number is '+arr[arr.length-2]);
        
		}