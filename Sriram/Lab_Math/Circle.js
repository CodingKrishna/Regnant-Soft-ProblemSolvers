/**
 * Area and Circumference Of a Circle
 */

  function area(r)

   {
      var a=3.14159 * (r * r)
      return a;
   }


  function circum(c)
  
   {
       var b=2 * 3.14159 * c
       return b;
   }

   var r1 = area(10)
   var r2 = circum(10)

   consol.log("area of a circle is: "+a)
console.log("Circumference Of a Circle is: "+b)