var a=function()
{
console.log("var fun");
}
function fun()
{
    console.log("normal fun");
    return a;
}

function pass(b)
{
  return b();
}
var k=pass(fun);
k();