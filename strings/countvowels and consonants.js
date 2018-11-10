/**
 * number of vowels and consonents in string
 */
var str4="vikram";
var count=0;
var count2=0;
for(var i =0;i<=str4.length;i++){
    if(str4.charAt(i)=='a'||str4.charAt(i)=='e'||str4.charAt(i)=='i'||str4.charAt(i)=='o'||str4.charAt(i)=='u') {
        
        count++;
    }
    else 
    {
count2++
    }
}
console.log("count of the vowels"+count)
console.log("count of the consonents"+count2)
