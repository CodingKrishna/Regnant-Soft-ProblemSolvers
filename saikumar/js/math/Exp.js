/**How to get exponential value of a number. */
var a = 2;
var exp=1;
if(a==0){
    console.log("The exponential of a given number: "+exp)
}
else{
    while(a > 0){
        exp=exp*2.718;
        a--;
     }
     console.log("The exponential of a given number: "+exp);
}
