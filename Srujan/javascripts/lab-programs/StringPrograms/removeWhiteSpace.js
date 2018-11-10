/* program to remove all white spaces
assingning the nonwhite space elements to the charecter array
*/
var something='some at some point';
//declaring an array
var strArr=[];j=0;
for(i=0;i<something.length;i++){
    //condition to check weather it is a white space or not
    if(something.charAt(i)!=' '){
        strArr[j]=something.charAt(i);
        j++;
    }
}
console.log(something);
console.log(strArr);
