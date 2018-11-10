/**
 * 
 */

var arr=[1,1,2,2,3,4,4,5,5,6];
 count=0;
for(var i=0;i<=arr.length;i++)
{
    for(var j=i+1;j<arr.length;j++)
    {
        if(arr[i]==arr[j])
        {
            count++;
            break;
        }
    }
        if(count>0){
            console.log(arr[i]+" is repeated")
            break;
        }
}


/**
 * print first non repeated character from String
 */

  var s="java code";

  for(var i=0;i<s.length;i++)
  
{
    var count=0;
    for(var j=i+1;i<s.length;j++)
    {
         if(s[i]!=s[j])
         {
            count=count+1;
            break;
         }
    }

            if(count==1)
            {
                console.log(s[i]);
                break;
            }
} 