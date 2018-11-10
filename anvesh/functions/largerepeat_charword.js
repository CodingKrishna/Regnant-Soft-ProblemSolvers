/**find large repeating word char index */
var a=["anba","ajgae","abrdaa","aa"];
var count=0,test=0,large=0
function charRepeatLarge(b)
{ 
   for(var index=0;index<a.length;index++)
    {    count=0;

          var k=a[index];
           for(var inerindex=0;inerindex<k.length;inerindex++)
       {
              if(b==k.charAt(inerindex))
              {
                  count++;
              }
        }
        
        if(test < count){test=count;large=index}
    }
    console.log(a[large]+" is large repeat given char string it is present at index position"+(large));
}
charRepeatLarge('a');

 
 