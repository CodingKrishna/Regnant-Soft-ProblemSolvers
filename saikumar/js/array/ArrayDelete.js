/**Delete the element from array */
var a=[1,2,3,4,5,6];
var b=[];
function f1(x){
    var j = 0;
    for(var i = 0; i < a.length; i++){
        if(a[i]!=x){
            b[j]=a[i];
            j++;
        }
    }
    a=b;
    for(var i = 0; i < a.length; i++){
        console.log(a[i]);
    }
}
f1(3);



