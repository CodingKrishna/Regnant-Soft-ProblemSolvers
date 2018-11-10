/**
 * program to convert the string to uppercase
 * checking the ascii code so that we can convert         
 * 
 */

 //declaring a variable
 var str="My name is Srujan";
//creating capitalize function
 let capital=function(s){
     var t="",a;
     for(i=0;i<s.length;i++){
        var letter=s.charCodeAt(i);
        
        if(letter>= 97 && letter<= 122){
            //conversting lowercase alphbet to uppercase
            var c=String.fromCharCode(letter-32);
            console.log(c);
            t+=c;
        }
        
        else{
        t+=s.charAt(i);
        }
     }
     return t;
 }
 console.log(capital(str));
 //function for lower case
 var lower=function(s){
     var temp="";
     for(i=0;i<s.length;i++){
        var letter1=s.charCodeAt(i);
        
        if(letter1>= 65 && letter1<= 90){
            //converting uppercase letter to lower case
            var ch=String.fromCharCode(letter1+32);
            console.log(ch);
            temp+=ch;
        }
        
        else{
        temp+=s.charAt(i);
        }
     }
     return temp;

 }
 console.log(lower(str));