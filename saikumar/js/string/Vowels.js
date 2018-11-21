/**count number of vowels and consonants in a String */
var str = "hello    world@@##!";
var count = 0;
var count1 = 0;
/**allowing only a to z inside switch */
for(var index = 0; index < str.length; index++){
    if(str.charAt(index) >= 'a' && str.charAt(index) <= 'z'){
        switch(str.charAt(index)){
            case 'a': 
            case 'e':
            case 'i':
            case 'o':
            case 'u': count++;
                      break;
            default: count1++;
        }
    }
}
console.log("Vowels: "+count);
console.log("COnsonants: "+count1);