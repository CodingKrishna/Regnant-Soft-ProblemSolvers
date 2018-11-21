/**
 * this code counts the vowels in a given string
 * @param {string to count vowels} st 
 */


function countVowels(st){
    var ch = '';
    var count=0,a=0,e=0,i=0,o=0,u=0;
    for(var j=0;j<st.length;j++){
        ch = st.charAt(j).toLowerCase();
    
        switch(ch){
            case 'a':   a++;
                        break;
    
            case 'e':   e++;
                        break;
    
            case 'i':   i++;
                        break;
    
            case 'o':   o++;
                        break;
    
            case 'u':   u++;
                        break;
    
            default :   count++;
        }    
    }
    return a+e+i+o+u
}
var str = "aaacccvvviiiooonnnvvvvuuuuuu";

console.log(countVowels(str))
