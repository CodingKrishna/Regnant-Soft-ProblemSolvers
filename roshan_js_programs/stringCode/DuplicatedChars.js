/**
 * this code counts duplicate chars in a given string
 */
var s = "sfoasijsdmfosiejf"
function findDuplicate(str) {
    var ch = [];
    var count = 0;
    
    for(var i=0;i<str.length;i++)
        ch[i] = str.charAt(i)

    for (let i = 0; i < ch.length; i++) {
        var flag = true;
        for (let j = 0; j < ch.length; j++) {
            if(ch[i] == ch[j] && i!=j){
                count++;
            }
        }
        if(count > 0)
        for(var a = 0;a<i;a++){
            if(ch[a] == ch[i]){
                flag = false;
                break;
            }
        }
        if(flag)
        console.log(ch[i]+" repeated "+count+" times")
        count = 0;
        
    }
}
findDuplicate(s)