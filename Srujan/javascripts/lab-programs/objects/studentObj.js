/**
 * creating a simple demo of student objects
 * 
 */

 // creating the student object
var student={
    id:001,
    name:"srujan",
    college:"cvr college of engineering",
    branch:"ECE",
    mobile:[8010203040,9050607080],     //creating an array in an object
    marks:{                             //creating marks object in student    
           emtl:65,
           mpmc:70,
           mwe:50, 
          }
};
//printing the mobile number in for loop
for(var i=0;i<=student.mobile.length-1;i++){
    console.log(student.mobile[i]);
}
console.log(student.marks.emtl);
console.log(student.id);
console.log(student.name);
console.log(student.college);
console.log(student.branch);
//sending the student object to the maths function and accessing them
var marks=function(a){
console.log(a.marks.emtl);    
console.log(a.marks.mpmc);
console.log(a.marks.mwe);
}
marks(student);
//geting the mobile number using function return
var mobile=function(a){
    return a.mobile[1];
}
console.log(mobile(student));
//creating students objects inside an array and accessing them 
var students=[{id:01,name:"sai"},{id:02,name:"srujan"}]
console.log(students[0].name);
console.log(students[1].id);