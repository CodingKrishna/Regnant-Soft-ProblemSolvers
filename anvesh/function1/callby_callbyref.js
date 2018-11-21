var a=10;
var b={c:20};

function send(d)
{
    var a=20;
}
function send2(e)
{
    e.c=30;
}
console.log( "a before "+a);
console.log("b before",b);
send(a);
console.log("a before "+a);
send2(b);
console.log("c after",b);