/*finding x^n */
var num=5;
var pow=3;

var power=function(n,p){
    var total=1
for(var i=1;i<=p;i++){
    total=total*num;
}
console.log(total);
}
power(num,pow);