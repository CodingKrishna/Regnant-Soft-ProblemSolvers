var s ='Bangalore'
var s1=""
var s2=""

for(var i=0;i<s.length;i++){

    if(s.charAt(i)>='a' && s.charAt(i)<='z'){


        s1= s.charCodeAt(i) -32;
        s2= s2+String.fromCharCode(s1)

    }
    else{
        s2=s2+s.charAt(i)
    }

}
console.log(s2)