/**
 * Duplicate character in a given string
 */
var st="sriram apple sasi gas"

for(var index = 0; index < st.length; index++)
{

    var count =0
    for(var j = 0; j < st.length; j++)
    {
       if(st.charAt(index)==st.charAt(j) &&(st.charAt(index)!=" "))
       {
          if(index > j)
          {
              break;
          }
           count=count + 1
           
       }
       
    }
    if(count>1)
    {
        console.log(st.charAt(index)+"-"+count)
    }
 
}
