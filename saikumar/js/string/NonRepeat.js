var str = "hhhhhheillhe";
/**print the first non repeated character and then break the outer for loop */
for(var index = 1; index < str.length; index++){
    var count = 0;
    for(var index1 = 0; index1 < str.length; index1++){
        if(str.charAt(index) == str.charAt(index1)){
        count++;
        }
    }
    if(count == 1){
        console.log(str.charAt(index));
    }
}