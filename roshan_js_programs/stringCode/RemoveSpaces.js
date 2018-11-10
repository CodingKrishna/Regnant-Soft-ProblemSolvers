/**
 * this code removes spaces from the given string
 */
function removeSpace(str) {
    var trm = str.trim();
    var str2 = "";
    for (let i = 0; i < trm.length; i++) {
        if(trm.charAt(i) != " "){
            str2+=trm.charAt(i);
        }        
    }
    return str2;
}
var mainstr = "this is java t point"
console.log("given string :"+"\""+mainstr+"\"")
console.log("after removing all spaces :\t"+"\""+removeSpace(mainstr)+"\"")