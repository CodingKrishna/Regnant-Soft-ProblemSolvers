/**
 * curryfing fuction
 */
var f1= mul(5);
var r=f1(10);
console.log("the result of curryfying function"+r);
function mul(x)
{
    return function(y)
    {
        return x*y;
    }
}
/**
 * closer function
 */
var f1= mul(5);
var r=f1(10);
console.log("the result of closser function"+r);
function mul(x)
{
    var z=1;
    return function(y)
    {
        z=z+y;
        console.log("the value of the z"+z);
        return x*y;
    }
}
/**
 * accessing of the object
 */
var student={
   id :1,
    name:"abc",
    age:25,
 mobile:[994999,9090900],

};
console.log("student id"+student.id);
var student2={
    id:2,
    name:"bbb",
    age:"23",
};
var arr=[student,student2];
console.log(arr);
function f1(student)
{
 return student;
}
var z= f1(student);
console.log(z);
function f(student)
{
    return function f2(student2)
    {
        return student2;
    }
}
var k=f(student);
var k1=k(student2);
console.log("a function taking object as argument and returining the function which istaking other object and returining it"+k1)





function mul(student)
{
    return function(student2)
    {
        return student2;
    }
}
var f10= mul(student)(student2);

console.log("the result of curryfying functionwitn object returning"+f10.id);