/**
 * this code takes a number and checks whether the given number is a armstrong number
 */
var num = "370";
function checkArmstrong(arg) {
    var i=0,sum=0;
    var len = arg.length;
    i=parseInt(arg);
    //console.log(arg)
    while (i > 0) {
        sum += Math.pow((i%10),len)
        i = parseInt( i / 10 );
    }
    if(parseInt(arg) == sum){
        return true;
    }
    else
    return false;
}
if(checkArmstrong(num))
    console.log("it is armstrong number")
else
    console.log("it is not armstrong")