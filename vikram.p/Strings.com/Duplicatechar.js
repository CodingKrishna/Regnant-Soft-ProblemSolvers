/**
 * find duplicate characters in a string
 */

 var s="welcome to javascript";
    
for(var i=0;i<s.length;i++)

{     count=1;
    for(var j=i+1;j<s.length;j++)
    {
        
        if(s[i]==s[j])
        {
             count=count+1;
              
        }
    }

        if(count>1)
        {
            
            console.log(s[i]+" is repeated "+count);
            
        }
}
 
