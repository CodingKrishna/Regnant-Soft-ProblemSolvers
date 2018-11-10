/*program to find the number of words in an array
    first converting it to array finding space using space count we find number of words
*/

//String value
var str='hello  World ';
//declaring char array
var chArr=[];

//convering String to char array
for(var i=0;i<str.length;i++){
    chArr[i]=str.charAt(i);
}
chArr[str.length]=" ";

//taking the variable for counting word
count=0;

for(i=0;i<chArr.length;i++){
    
       if(chArr[i]==' '&& chArr[i+1]!=' '){
            count++;
        }   
    
}

console.log((count)+' numbers of words are present')