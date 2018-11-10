/**
 * find duplicate characters in a string
 */
var str = "sasikiransajja"

var count=0
for(var i=0;i<str.length;i++)
{
    for(var j=i+1;j<str.length;j++)
    {
        if(str[i]==str[j])
        {
            console.log(str[j])
            count++
            break
        }
    }
    
}