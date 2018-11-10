/**Program to find area and circumference of circle. */
var r = 3;

/**To find area of circle */
function area(x){
    var ar = (22/7)*x*x;
    console.log("Area of circle is: "+ar);
}

/**To find circumference of circle */
function circumference(x){
    var cir=2*(22/7)*x;
    console.log("Circumference of circle is: "+cir);
}


area(r);
circumference(r);