/* first non repeated wordes in string*/
var  a="keerthi"

for(var i=0;i<a.length;i++){
    count=1;
    for(var j=0;j<a.length;j++){
        if(a[i]==a[j] && i!=j){
            count++;
            }       
    } 
    if(count == 1)
    console.log(a[i])
    count = 0
       
}


    
