/**
 * program to find exponential of number
 * 
 */
var num=3,res=1;
var expo=function(n){
    while(n>0){
        res=res*2.714;
        n--;
    }
    console.log(res);
}
expo(2);