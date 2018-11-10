/**
 * convert upper case and lower 
 * //charcodeAt will return ascii value of the chanracter at particular index
 * //The static String.fromCharCode() method returns a string
 */

var str1="HELlllLOW";
var p;
var q="",q1="";
for(var index=0;index<str1.length;index++){
    var j=str1.charCodeAt(index);
    if(j>=97 && j<=122){
        var m=j-32;
        var p=String.fromCharCode(m);
        q+=p;

    }else {
        q+=str1[index];
    }
    if(j>=65 && j<=90){
        var m=j+32;
        var p=String.fromCharCode(m);
        q1+=p;
    }
    else{
        q1+=str1[index];
    }
}
console.log("upper case"+"\t"+q);
console.log("lowwer case"+"\t"+q1);