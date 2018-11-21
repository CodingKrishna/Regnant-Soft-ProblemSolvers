/**
 * this code calculates the hcf of given two numbers
 */

 var num1 = 15,num2=36
 function calculateHCF( number1 , number2) {
    
    var rem =1,quo = 0
var divisor = (number1>number2)? number2 : number1
var dividend = (number1>number2)? number1 : number2
    while(true){
        if((rem = (dividend%divisor))>0){
            //quo = parseInt(dividend/divisor)
            dividend = divisor
            divisor = rem
        }
        else {
            return divisor
        }    
    }
 }

 function calculateLCM(number1 , number2) {
     return number1*number2/calculateHCF(number1,number2)
     
 }

 console.log("HCF :"+calculateHCF(num1,num2))
console.log("LCM :"+calculateLCM(num1 , num2))