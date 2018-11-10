
var a=[12,3,4,6]
for(var i=a.length-1;i>=0;i--)
{
    for( var j=1;j<=i;j++){
        if (a[j-1]>a[j])
        {
      var temp=a[j-1]
        a[j-1]=a[j]
        a[j]=temp
        }
    }
}
/* printing in ascending order */
return a;

console.log(array([12,3,4,6]));