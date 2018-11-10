/**
 * checking weather two strings are anagram or not
 */
var st1="listen";
var st2="slient";
//function to check anagram
var anagram=function(s1,s2){
    //checking weather two strings are of same length or not
    if(s1.length!=s2.length){
        return false;
    }
    else{
        //converting string to charecter array
        var ch=s1.split('');
        //checking two strings
        for(i=0;i<ch.length;i++){
            count=0;
            for(j=0;j<s2.length;j++){
                //comparing two individual charecter of string
                if(ch[i]==s2.charAt(j)){
                    count=1;
                    break;
                    //if there is a match break the loop
                }
            }
            if(count!=1){
                break;
                //if first index does not found any match then break loop
            }
        }
        //if count=1 decides that it anagram
        if(count==1)
            return true;
        else
             return false;
    }
}
    var check=anagram(st1,st2);
    
    if(check==true){
        console.log("both strings are anagram");
    }
    else{
        console.log("both are not anagram");
    }
