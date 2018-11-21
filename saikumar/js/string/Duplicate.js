/**find duplicate characters in a string */
var str = "hellopppp klk";
/**To eliminate duplicate outputs break the inner for loop if index > index1 */
for(var index = 0; index < str.length; index++){
    var count = 0;
    for(var index1 = 0; index1 < str.length; index1++){
        if(str.charAt(index) == str.charAt(index1)){
            if(index > index1){
                break;
            }
            count++;
        }
    }
    if(count>1){
        console.log(str.charAt(index)+"----"+count);
    }
}