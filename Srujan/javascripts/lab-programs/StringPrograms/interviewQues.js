/**
 * progarm: input given is say input -- hhllyyjhhh -- output shuld be -- h2l2y2j1h3
 * 
 */
//entering string
var str='hhllyyjhhh';
//convering the string to charecter array 
var ch=str.split('');
//creating the variable to store the count of the variable
var finalStr='';
var count=0;
for(var i=0;i<ch.length;i++){
    for(var j=0;j<ch.length;j++){
        if(i>j){
            continue;
        }
        else if(ch[i]==ch[i-1]){
            break;
        }
        else{
            if(ch[i]==ch[j]){
                count++
                if(j==ch.length-1){
                    finalStr+=ch[i]+count;
                }
            }
             
            else{
                finalStr+=ch[i]+count;
                count=0;
                break
            }

        }    
    }
}
console.log(finalStr);