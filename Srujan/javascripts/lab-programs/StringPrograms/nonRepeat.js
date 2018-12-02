/*program to find the first non repeated charecter from string
    done by checking the nonrepeated element in the loop and printing it
*/
var str="my name is srujan";
//declaring charecter array
var ch=[],j=0;
var count=0;
//assigning the string values to the charecter array
for(var i=0;i<str.length;i++){
    if(str.charAt(i)!=' '){
        ch[j]=str.charAt(i);
        j++;
    }
}
//logic
for(i=0;i<ch.length;i++){
    for(j=i+1;j<ch.length;j++){
        if(ch[i]==ch[j]){
            var flag=1;
            break;
        }
        else{
            flag=0;
        }
       
    }
    if(flag==0){
        console.log(ch[i]+' is the first non repeated charecter');
        break;
    }
}
