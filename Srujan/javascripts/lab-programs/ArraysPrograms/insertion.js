/**
 * program to insert element to an array
 */
var a=[20,30,40,50,20];
//element value
var e=10
//element postion
var p=3;
//function to insert
var insert=function(c,e,p){
    //taking temporary array
    var b=[];
    //using this variable we change the index of b array
    j=0;    
    for(i=0;i<c.length;i++){
        //position is not equal to i then assign element of array
        if(i!=p){
            b[j]=c[i];
            j++;
        }
        //position is same then assign the new element
        else{
            b[j]=e;
            j++;
        }
    }
    a=b;
    console.log(b);
}
console.log(a);
insert(a,e,p)
console.log(a);