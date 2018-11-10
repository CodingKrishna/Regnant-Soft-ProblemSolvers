/**
 * this code calculates the exponential value of a given number
 */
var num = 11,pow = 2;
function expoValue(n , p) {
    if(p == 0){
        return 1;
    }
    else if(p > 0){
        var val = 1;
        for(var i=1;i<=p;i++){
            val *= n;
        }
        return val;
    }
    else{
        var val = 1;
        for(var j=1;j<=(-p);j++)
            val *= n;
        val = 1/val;
        return val;
    }

}
console.log("value of "+num+" to power of "+pow+" :"+expoValue(num,pow))