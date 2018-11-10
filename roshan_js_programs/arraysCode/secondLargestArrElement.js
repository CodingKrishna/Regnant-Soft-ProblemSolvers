var arr = [1,2,3,4,5,11,21,8,9];
function secHigh(a){
    var lar = 2;
    for(var i=0;i<a.length;i++){
        var temp;
        for (let j = i+1; j < a.length; j++) {
            if(a[i]>a[j]){
                temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }
    return a[a.length-lar];
}

var ele = secHigh(arr)
console.log("second highest :"+ ele)