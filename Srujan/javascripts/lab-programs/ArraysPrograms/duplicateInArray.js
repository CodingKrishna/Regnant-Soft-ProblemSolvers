/* Duplicate In Array  */
//initilizing array
var a=[1,1,1,3,1,2]

var count=0;
//outer loop
for(var i=0;i<a.length;i++){
    //innerloop
    for(var j=i+1;j<a.length;j++){
        //condition to check elements in an array
        if(a[i]==a[j]){
            count++;
             a[j]=-1; //making this element -1 because not to repeat this element again
        }
    }
    if(count>0&&a[i]!=-1){
        console.log(a[i]+' is repeated '+(count+1)+'times')
    }

   
    count=0;
}
