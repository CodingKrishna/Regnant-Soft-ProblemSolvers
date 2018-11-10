/**
 * count number of vowels and consonants in a String
 */
var str="regnant software solutions"
var vowels=0
var consonants=0

for(var i=0;i<str.length;i++)
{
    var ch=str.charAt(i)
    if(ch=='a' ||ch=='e' || ch=='i' || ch=='o' || ch=='u')
    {
        vowels++
    }
    else if((ch>='a' && ch<='z'))
    {
        consonants++
    }
}
console.log("no.of vowels in a string:"+vowels)
console.log("no.of consonants in a string:"+consonants)