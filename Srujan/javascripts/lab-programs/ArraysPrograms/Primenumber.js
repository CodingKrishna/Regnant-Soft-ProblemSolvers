var a=[1,2,3,4,6,9,7];

var prime=function(n){
    var m=n/2;
    var flag=0;
    for(var i=2;i<n;i++){
        if(n%i==0){
            flag=1;
            break;
        }
       
    }
    if(flag==0){
        return 1;
    }
    else
    return 0;

}
for(var i=0;i<a.length;i++){
    var check=prime(a[i]);
    if(check==1){
        console.log(a[i])
    }
    check=0;
}
