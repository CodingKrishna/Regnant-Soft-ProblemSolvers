/**
 * Evaluate x^n 
 */

 var r=1;

 function value(x, n)

  {
    while(n>0)
    {
       r=r * x
       n--
    }
    return r;
  }
  var res = value(2, 5)
  console.log(res)