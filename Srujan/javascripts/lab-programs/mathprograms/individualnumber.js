/* program to find the individual digit sum number 
logic is get the remainder divide the number by 10 add the remainder to sum
*/

let a=153;
let sum=0;
//creating the function to check the sum
let add=function(n){
    //logic to find the 
    while(n>0){
        let r=n%10;
         n=parseInt(n/10);
        sum=sum+r;
    }
    console.log(sum+' is the sum of '+a)
}
add(a);