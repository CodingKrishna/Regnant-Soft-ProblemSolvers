var choice=0,var1 = 0,var2 = 0;
choice = 4;
var1 = 12;
var2 = 23;

function arithOper(ch,ar1,ar2){
    switch (ch) {
        case 1:
            console.log("sum :"+ar1+ar2)
            break;
        case 2:
            console.log("product :"+ar1*ar2)
            break;
        case 3:
            console.log("difference :"+(ar1-ar2))
            break;
        case 4:
            if(var2 > 0){
                console.log("quotient :"+ar1/ar2)
            }
            else
                console.log("cannot divide with 0")
            break;
        default:
            console.log("invalid choice")
    }
}
arithOper(choice,var1,var2)