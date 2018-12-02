/**
 * delete an element from an array without method
 */
var z=[10,20,30,40,50];
//element to be deleted
var d=30;
//temporary array
var b=[];
var del=function(a,d){
    //using this variable we change the index of b array
    var j=0;  
    for(var i=0;i<a.length;i++){
        //condition used to skip the element which is going to be deleted
        if(a[i]!=d){
            b[j]=a[i];
            j++;
        }
    }
    z=b;
    // console.log(a);
}
del(z,d);
console.log(z);