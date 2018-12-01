var a={id:1,name:"anvesh",age:27,phone:[9505603987,8309747125],marks:{eng:21,ma:99,hin:53}};
console.log(a.id);
console.log(a.name);
console.log(a.age);
console.log(a.phone[0]);
console.log(a.phone[1]);
console.log(a.marks.eng);
console.log(a.marks.ma);
function fun(b)
{
  return b.id;
}
var d=fun(a);
console.log(d)