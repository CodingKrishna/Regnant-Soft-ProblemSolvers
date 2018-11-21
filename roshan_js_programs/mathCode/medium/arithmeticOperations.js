/**
 * this code takes two integers and operator as input and 
 * performs operation
 */

 /**
  * function that takes two numbers and operator as input 
  * performs according to operator
  * takes [ + - * / % ]as operator values
  * operator must be passed as a character
  * @param {first number} num1 
  * @param {second number} num2 
  * @param {operator} oper 
  */
 function operation(num1, num2, oper) {
    switch(oper){
        case '+':return num1+num2
        case '-':return num1-num2
        case '*':return num1*num2
        case '/':if(num2>0)return num1 / num2
                else{
                    console.log("cannot divide by zero")
                    return 0
                }
        case '%':if(num2>0)return num1 % num2
            else{
                    console.log("cannot divide by zero")
                    return 0
                }
        default : console.log("invalid choice")
     }    
 }
 var number1 = 12,number = 10,operator = '/'
 console.log(operation(number1,number,operator))
 console.log(operation(12,23,'/'))