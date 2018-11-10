/**count the number of words in a string */
var str = "This is a javascrpit program";
var count = 1;
/**First condition in if statement is to check number of words based on space
 * Secong condition in if statement is to remove more than one space
 */
for(var i = 0; i < str.length-1; i++){
    if(str.charAt(i) ==' ' && str.charAt(i+1) != ' '){
       count++;
    }
}
console.log("The number of word in the given string is: "+count);