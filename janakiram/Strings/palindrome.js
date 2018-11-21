var s = "adda"
var s1 = ""

for(var i=s.length-1;i>=0;i--){
    
   s1=s1+s[i]
}

if(s1== s){
    console.log("given string is palindrome")
}
else 
console.log("given string is not palindrome")


