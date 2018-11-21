/**
 * this code calculates simple interest for the given sum
 */


 var principle = 1000,timeYears=4,rateOfInterestPM=6

 function simpleInterestOf(p,t,r){
     return ((p*t*12*r)/100)-p
 }
 simpleInterest = simpleInterestOf(principle,timeYears,rateOfInterestPM)
 console.log(simpleInterest)