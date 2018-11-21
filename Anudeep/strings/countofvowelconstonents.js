/*program to count number of vowels and consonants in a String */
var a="hello world how are you now";
var count=0,count1=0;
for(var i=0;i<a.length;i++){
    if(a[i]=='a'||a[i]=='e'||a[i]=='i'||a[i]=='o'||a[i]=='u'){ /*condition for vowels count */
        count++;
    }
    else if(a[i]!=" "){                     /*this is to check consonants */
        count1++;
    }
}
console.log(+count,"count of ovels");
console.log(+count1,"count of consonants");
console.log(a.length);


