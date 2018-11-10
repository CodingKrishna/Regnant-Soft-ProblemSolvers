/** program to print highest continus repeat value starting
 * and ending location
 */
var a=[0,0,1,0,0,0,0,0,1,0,0,0,0];
var count=1,length1=0,finalPosition=0,startPosition=0 ;


for(var index=0;index<a.length;index++)
{  count=1;
    for(inerindex=index+1;inerindex<a.length;inerindex++)
    {
       if(a[index]==0 && a[inerindex]==0)
       {
          startPosition=index;  
             count++;
       }
       else
       { 
           break;
       }
    }
                 if(length1<count)
              {
                  finalPosition=startPosition;
                 length1=count;
                 
              }
}
console.log("starting position "+finalPosition+" finalposition "+(finalPosition+length1-1));