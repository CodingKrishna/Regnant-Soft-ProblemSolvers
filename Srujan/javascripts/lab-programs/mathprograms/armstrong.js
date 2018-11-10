/*program to print the check the number is armstrong are not */
var  num=1634;
var count=0;
var check=num;
var temp=num;
var sum=0;
//loop to check how many times that each digit number should multiply 
while(check>0){
    check=parseInt(check/10);
    count++;
}
//logic for armstrong number
while(temp>0){
    var r=parseInt(temp%10);
    var rem=1
    var it=count;
    //digit multiplication
    while(it>0){
        rem=r*rem;
        it--;
    }
    sum=sum+rem;
    temp=parseInt(temp/10);
}
if(num==sum){
    console.log(num+' is armstrong number');
}
else{
    console.log(num+' is not armstrong number');
}