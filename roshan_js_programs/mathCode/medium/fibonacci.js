/**
 * this code generates fibonacci sequence
 */

 var v1=0,v2=1,sum = 0
 var length = 10

 console.log(v1+"\n"+v2)
 for (let count = 0; count < length; count++) {
     sum = v1+v2
     console.log(sum)
     v1 = v2
     v2 = sum
 }