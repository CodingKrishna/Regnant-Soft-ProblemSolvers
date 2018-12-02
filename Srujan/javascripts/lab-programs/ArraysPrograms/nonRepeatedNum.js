/* Finding the non repeated numbers in an arrays */

var a=[1,2,1,3,1,2,5]

var count=0;


for(var i=0;i<a.length;i++){
    //innerloop
    for(var j=i+1;j<a.length;j++){
        //condition to check elements in an array
        if(a[i]==a[j]){
            count=1;
            a[j]=-1;
        }
    }
    if(count==0&&a[i]!=-1){
        console.log('nonRepeated number: '+a[i])
    }
    count=0;
}