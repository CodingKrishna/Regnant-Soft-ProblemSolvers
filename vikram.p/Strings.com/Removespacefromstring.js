/**
 * program to remove all white spaces from a string
 */
var s="welcome to javascript world";
  var s1="";
for(var i=0;i<s.length;i++)
{

        if(s[i]==" ")
        {
        continue;
        }
        else
        {
            s1=s1+s.charAt(i);
            
            
        }
        
}
console.log(s1);