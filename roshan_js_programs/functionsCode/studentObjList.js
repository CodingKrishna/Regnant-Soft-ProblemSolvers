/**
 * this code takes a list of student objects and prints them
 */

 var studentsList = [
     { id : 123, name : "aakash"},
     { id : 532, name : "william"},
     { id : 653, name : "chand basha"}
 ]

 function printStudents( stdArr ){
     if(stdArr.length > 0){
         for(var index=0;index < stdArr.length; index++){
             console.log("student id :"+stdArr[index].id+"\tstudent name :"+stdArr[index].name)
         }
     }
 }
 printStudents(studentsList)