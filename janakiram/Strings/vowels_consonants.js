var s= 'bangalore'
var count =0;
for(var i=0;i<s.length;i++){
    if(s[i] =='a'|| s[i] =='e'|| s[i] =='i'|| s[i] =='o'|| s[i] =='u'){
        count =count+1

    }
    
}
console.log('no.of vowels are '+ count)
console.log('np.of consonants are '+(s.length-count))
