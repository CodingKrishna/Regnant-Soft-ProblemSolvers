/**
 * this code gives area of triangle by taking sides
 * as inputs
 */


 function triangleAreaPerimeter(side1,side2,side3) {
        var s = (side1+side2+side3)/2,
            ar = Math.sqrt((s*(s-side1)*(s-side2)*(s-side3)))
    var val = {
            area : ar,
            perimeter : side1+side2+side3
     } 
     return val
 }

 console.log(triangleAreaPerimeter(3,4,5))
