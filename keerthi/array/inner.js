//function returns another function

function f1(){
     function f2(){
        var c=45;
        console.log(c);
        return c;

    }
    return f2();
}
var r = f1();
console.log(r)
