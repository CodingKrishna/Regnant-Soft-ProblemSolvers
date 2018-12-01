/**  a function to take student object and print it.
 */
var student={id:1,name:"anvesh",marks:{hindi:100,max:80},dep:"cse",phone:[9505603987,8465746852]};
function details(a)
{
  console.log(a.id);
  console.log(a.name);
  console.log(a.marks.hindi);
  console.log(a.marks.max);
  console.log(a.dep);
  console.log(a.phone[0]);
  console.log(a.phone[1]);
  console.log(a);
    
  
}
var k=details(student);