var arr = [1,2,3,4,5,6,7,8,9];
var ele = 22,pos = 6;

function insertEle(ar,e,po){
    var arr2 = []
    if(po <= ar.length){
        for(var i=0;i<=po-1;i++){
            arr2[i] = ar[i];
        }
        arr2[po-1] = e;
        for(var j=po-1;j<ar.length;j++){
            arr2[j+1] = ar[j];
        }
    }
    return arr2;
}
arr = insertEle(arr,ele,pos);
console.log(arr)