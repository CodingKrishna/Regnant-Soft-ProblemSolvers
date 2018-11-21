/**Check the given number is armstrong number or not. */
var n = 1634;
var l = 0;
var sum = 0;
var temp = n;
while(temp > 0){
    temp = parseInt(temp/10);
    l++;
}
temp = n;
while(n > 0){
    var l1 = l;
    var r1 = 1;
    r = parseInt(n%10);
    n = parseInt(n/10);
    while(l1>0){
        r1 = r1*r;
        l1--;
    }
    sum = sum+r1;
}
if(sum == temp){
    console.log("Given number is armstrong");
}
else{
    console.log("Given number is not armstrong")
}
