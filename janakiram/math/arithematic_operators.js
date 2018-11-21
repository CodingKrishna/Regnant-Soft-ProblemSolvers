var string = 'sub'
var result;
var a=20
var b= 30
switch(string){
    case 'add': r=a+b;
                console.log(r);
                break;
    case 'sub': r=a-b;
    console.log(r);
             break;
    case 'mul': r=a*b;
    console.log(r);
             break;
    case 'div': r=a/b;
    console.log(r);
             break;
    default : r=a%b;
    console.log(r);
            break; 
}