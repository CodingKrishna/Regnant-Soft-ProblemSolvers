/**
 * this code counts number of words in a given string
 */
var mainstr = " this is the   main string."
function countWords(str) {
    var trm = str.trim();
    var count =0;
    for(var i=0;i<str.length;i++){
        if(trm.charAt(i) == " " && trm.charAt(i+1) != " "){
            count++;
        }
    }
    return count+1;
}
console.log("words in the given  string \n")
console.log("\t\""+mainstr+"\"\t"+" :"+countWords(mainstr))