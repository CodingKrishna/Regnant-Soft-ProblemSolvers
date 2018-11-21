var arr= [1,45,21,7,12,29,44]
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
console.log("Ascending Order:");
		for (var i = 0; i < arr.length ; i++) 
		{
			console.log(arr[i]);
		}