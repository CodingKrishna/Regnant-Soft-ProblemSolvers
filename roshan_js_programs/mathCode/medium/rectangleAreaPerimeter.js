/**
 * this code calculates area and perimeter of a rectangle
 */


 var len = 11,breadth = 22
 /**
  * function that takes length and breadth and 
  * calculates area and perimeter
  * @param {length of rectangle} length 
  * @param {breadth of rectangle} breadth 
  */

 function areaAndPerimeter(length,breadth) {
     var values  = {
         area : length*breadth,
         perimeter : 2*(length+breadth)
     }
     return values
     
 }
 console.log(areaAndPerimeter(11,22))
