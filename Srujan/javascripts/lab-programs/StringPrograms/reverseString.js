/*
    reverse of string
*/
var string ="this is in reverse"
//createing fumction to reverse
var reverse=function(s){
    //crating the string to store in reverse order
    var rev="";
    //var j=s.length-1;
    for(var j=s.length-1;j>0;j--){
        
        rev=rev+s.charAt(j);
        
    }
    console.log(rev);
    return rev;
    
}
console.log(reverse(string));