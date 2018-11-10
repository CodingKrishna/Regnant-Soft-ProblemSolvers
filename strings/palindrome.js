 /**
 * check string palindrome
 */
var str3="adfada";
var l= str3.length;
flag=0;
for(var index=0;index<=l;index++){

        if(str3[index]!=str3[l-index-1]){
        flag=1;
        break;
    }
    
}
if(flag==0){
    console.log("the string"+"\t"+str3+" is palindrome")
}