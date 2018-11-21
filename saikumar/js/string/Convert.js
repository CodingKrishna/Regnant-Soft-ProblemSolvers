/**convert string to integer and integer to string in java */
var number = "10";
var number1 = 10;
var number2 = parseInt(number);
if(number1 == number2){
    console.log("integer");
}
else{
    console.log("string");
}
var number3 = number2.toString();
if(number == number3){
    console.log("string");
}
else{
    console.log("integer");
}