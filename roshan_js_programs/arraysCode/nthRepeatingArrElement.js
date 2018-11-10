var arr = [1,2,3,4,5,5]
function nthRepeatedElement(ar){
    var count = 0;
    for(var i=0;i<ar.length;i++){
        for(var j=i+1;j<ar.length;j++){
            if(ar[i] == ar[j] && i!= j){
                count++;break;
            }
            
        }
        if(count > 0){
            return ar[i];
        }
    }
    return 0;
}
var rep = nthRepeatedElement(arr);
console.log(rep)