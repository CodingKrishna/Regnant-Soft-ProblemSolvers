var a=[12,23,34]
function b(){
console.log(12)
}
function f1(a){
    return b();

}
var v=f1(a);
console.log(v)