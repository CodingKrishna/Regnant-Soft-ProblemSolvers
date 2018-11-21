/**To evaluate x^n. */
var x = 7;
var n = 2;
var m = n;
var res = 1;
/**while loop iterates based on n */
while(n > 0){
    res = res*x;
    n--;
}
console.log(x+"^"+m+" is: "+res);