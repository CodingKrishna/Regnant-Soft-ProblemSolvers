/** 
 * program to find duplicate words
 * 
 */

 var string="this ids to ids check this ids";
 //crearting the function to check their words and occurances
 var wordoccurance=function(s){
     var words=s.split(" ");
     console.log(words);
    var count=0;
     for(index=0;index<=words.length-1;index++){
         for(index1=0;index1<=words.length;index1++){
             if(index>=index1){
                if(words[index]==words[index1]&&index!=index1){
                    break;
                }
            }
                
             else{
                if(words[index]==words[index1]){
                    count++;
                        
                }
            }
        }
        if(count>0){
            console.log(words[index]+" is repeated "+count+" times")
        }
        count=0;
    }
}
wordoccurance(string);

