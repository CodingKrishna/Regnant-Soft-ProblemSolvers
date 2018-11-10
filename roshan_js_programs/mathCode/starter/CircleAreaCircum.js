/**
 * this code calculates area and circumference of a circle
 */
/**
 * 
 * @param {radius of the circle} rad 
 */
function circleArea(rad) {
    return Math.PI*rad*rad;
}
function circleCircumference(rad) {
    return 2*Math.PI*rad;
}
console.log("area of a circle with radius "+11+" :"+circleArea(11))
console.log("circumference of a circle with radius "+11+" :"+circleCircumference(11))