var num1=4;
var num2=6;
for(var i=num1<num2?num1:num2;i>=1;i--){
    if(num1%i==0&&num2%i==0){
        var hcf=i;
        break;
    }
}
lcm=(num1*num2)/hcf;
console.log("hcf of "+ num1+" & "+ num2+" is: "+hcf);
console.log("lcm of "+ num1+" & "+ num2+" is: "+lcm);