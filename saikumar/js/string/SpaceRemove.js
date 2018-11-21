/**program to remove all white spaces from a string */
var str = "This is javascript program";
var s="";
/**Concating every character except space */
for(var i = 0; i < str.length; i++){
    if(str.charAt(i) != ' '){
        s=s+str.charAt(i);
    }
}
console.log(s);