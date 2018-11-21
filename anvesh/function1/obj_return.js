/**a function to return student object. */
var student={id:1,name:"anvesh",marks:{hindi:100,max:80},dep:"cse",phone:[9505603987,8465746852]};
function details(a)
{
  return a
}
var k=details(student);
/**it retining entire obj but here we are  printing onley id here 
 * for example to show we can print single required element from entire obj  */
console.log(k.id);
console.log(k)