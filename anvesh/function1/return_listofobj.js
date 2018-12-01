/**a function to return list of students objects. */
var student=[{id:1,name:"anvesh",marks:{hindi:100,max:80},dep:"cse",phone:[9505603987,8465746852]},
             {id:2,name:"anvesh1",marks:{hindi:40,max:50},dep:"ece",phone:[855603987,7465456852]}];

 function send()     
 {
     return details(student);
 }      
function details(a)
{
      for(let index=0; index<a.length;index++)
   {
              console.log(a[index]);
   }
   return a;
  
}
var k=send();
console.log(k[0].id);