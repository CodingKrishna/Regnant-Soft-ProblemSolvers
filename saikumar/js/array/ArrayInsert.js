/**Insert an Element in a Specified Position in a given Array */
var a=[1,2,31,53,45];
var b=[];
function f1(x,y){
    var j=0;
    for(var i = 0; i < a.length; i++){
        if(i!=x){
            b[j]=a[i];
            j++;
        }
        else{
            b[j]=y;
            j++;
            b[j]=a[i];
            j++;
        }
    }
    a=b;
    for(var i = 0; i < a.length; i++){
        console.log(a[i]);
    }
}
f1(3,89);