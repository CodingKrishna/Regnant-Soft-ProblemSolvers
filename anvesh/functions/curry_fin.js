function mul(a)
{
    return function (b)
    {
        return a*b;
    }
}
var j=mul(5)(10);
console.log(j)

