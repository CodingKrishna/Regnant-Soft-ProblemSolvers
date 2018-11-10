/*program for remove whitespaces in string */
var a="janaki ram"
var b =" "
for(i=0;i<a.length;i++){

    if(a.charAt(i)!=" "){
    
       b=a.charAt(i)

    }
    console.log("after removing white spaces "+b);
}