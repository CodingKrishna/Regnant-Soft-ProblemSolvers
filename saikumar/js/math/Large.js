var a = [1,2,3,5,4,7,6,9,8];

/**To sort the array in ascending order */
for(var i = 0; i < a.length; i++){
    for(var j = 0; j < a.length; j++){
        var temp = 0;
        if(a[i]<a[j]){
            temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }
    }
}
console.log("The Smallest integer in the given list is: "+a[0]);
console.log("The Largest integer in the given list is: "+a[a.length-1]);