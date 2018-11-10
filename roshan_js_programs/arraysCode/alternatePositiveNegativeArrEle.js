var arr = [1,2,3,4,55,6,7,8,9,-1,-4,-3]
function rearrangeArray(ar){
    var a = [];
    var b = [];var p1=0,p2=0;
    for (let i = 0; i < ar.length; i++) {
        if(ar[i]>0){
            a[p1] = ar[i];
            p1++;
        }
        else{
            b[p2] = ar[i];
            p2++;
        }
    }
    p1=0,p2=0;
    for (let i = 0; i < ar.length; i++) {
        if(i%2 == 0){
            if(b[p2]<0){
                ar[i] = b[p2];
                p2++;
            }
            else
                arr[i] = 0;
        }
        else{
            ar[i] = a[p1];
            p1++;
        }        
    }
    return ar;
}
arr = rearrangeArray(arr)
console.log(arr)