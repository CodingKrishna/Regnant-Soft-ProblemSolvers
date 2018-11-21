/*program to Insert an Element in a Specified Position in a given Array */
var k=[2,3,4,5,6,2,4];
var el=10; p=3;
var m=[];
if(p<=k.length){
for(var i=0;i<p-1;i++){
    m[i]=k[i];
}
m[p-1]=el;
for(var i=p-1;i<k.length;i++){
m[i+1]=k[i];
}
}
for(var i=0;i<m.length;i++){
    console.log(m[i]);
}
