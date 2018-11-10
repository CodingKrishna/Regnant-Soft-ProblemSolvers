/**
 * 
 *Program to Check if a Number is Positive, Negative or Zero.
 */
function f1(a) {
    if(a>0) {
        console.log("the given number is positive"+a);
    }
    else(a<0)
     console.log("the given number is negative");
    
    }
    f1(10)
    /**
     * To compute the average of three given numbers.
     * 
     */
    function f2(a,b,c){
        var sum=(a+b+c)/3;
        return sum;
    }
    console.log("the average of the numbers"+f2(10,20,30))
    /**
     * Program to find area and circumference of circle.
     */
    function f3(radius){
        var area=(3.14*radius*radius)/2;
        var perimeter=(2*3.14*radius);
        console.log("area of the circle"+area);
        console.log("perimenter of the circle"+perimeter);
    }
    f3(10);
    /**
     * To evaluate x^n
     */
    var x=10;
    var n=2;
    var k=1;
    while(n>0){
        k=k*x;
        n--;
    }
    /**
     * exponential
     */
    
    console.log(k);
    var e=2.17;
    var n=2;
    var k=1;
    while(n>0){
        k=k*e;
        n--;
    }
    console.log("exponentialll"+k)
    /**
     * multiplication table
     */
    function m1(a){
        for(var i=1;i<=10;i++)
        { 
            var z=a*i;
            console.log(+a+"*"+ i+"="+z);
        }
    
    }
    console.log(m1(5));