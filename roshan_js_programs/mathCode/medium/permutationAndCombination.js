/**
 * this code calculates permutations
 */

 
 function factorial(num) {
    var fact=1 
    while (num > 0) {
         fact*=num
         num--
     }
     return fact
 }
 /**
  * calculating permutations for n total objects 
  * where k are used at a time
  */
 var n = 10,k = 2
 // nCk or P(n,k) where 'n' is always greater than 'k'
 if(n>k)
 var permutations = factorial(n)/factorial(n-k)
console.log(permutations)

/**
 * calculating combinations where order is not considered
 * C(r,s) or rCs where 
 * r = total objects
 * s = used objects at a time
 * r is always greaterthan s
 */
var s = 2,r = 10

if(r>s)
    var combinations = factorial(r)/(factorial(r-s)*factorial(s))

if(combinations != undefined)
    console.log(combinations)