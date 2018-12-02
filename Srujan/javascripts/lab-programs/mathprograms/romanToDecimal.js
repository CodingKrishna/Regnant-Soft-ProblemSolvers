/**
 * program to convert roman equalent to decimal
 * 
 */
var readline=require('readline');
var rl=readline.createInterface(process.stdin,process.stdout);
var des='';
rl.question("enter the roman number?",function(answer){
    var roman=answer;

var num=roman.split("");

while(num>0){
    switch(num){
        case 'i':
                    des+='1';
                    break;
        case 'v':
                    des+='5';
                    break;
        default:
                console.log('not a roman number');
                break;
    }
}
});
