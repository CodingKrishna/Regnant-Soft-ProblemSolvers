/*count the the number of words in a string*/
var a="hghg        hghghg jugutyjg huynh  biuniukj"
//var st=a.trim();
var count=1;
for(i=0;i<a.length;i++){

    if(a[i]==" ")
    {
       count++;
    }
}
console.log("number of words are "+count)